const IncomeSchema=require("../Model/income.model")

exports.addIncome=async (req,res)=>{
    const {title, amount, catagory, description, date}=req.body
    const income=IncomeSchema({
        title,
        amount,
        date,
        catagory,
        description
        
    })
    // console.log(income)

    try {
        if(!title || !catagory || !description || !date){
            return res.status(400).json({message: "All fields are required"})
        }
        if(amount <=0 || !amount ==='number'){
            return res.status(400).json({message: "Amount Must be a positive number."})
        }
        await income.save()
        res.status(200).json({message:"Income Added"})
    } catch (error) {
        res.status(500).json({message:"Server  Error"})
    }
    

}

exports.getIncomes=async (req, res)=>{
    try {
        const incomes=await IncomeSchema.find().sort({createdAt: -1})
        res.status(200).json(incomes)
    } catch (error) {
        res.status(500).json({message:"server error"})   
    }
}

exports.deleteIncome=async (req, res)=>{
    const {id}=req.params
    IncomeSchema.findByIdAndDelete(id)
        .then((income)=>{
            res.status(200).json({message:"Income Deleted Successfully"})
        }).catch((err)=>{res.status(500).json({message:"Error deleting"})})
}