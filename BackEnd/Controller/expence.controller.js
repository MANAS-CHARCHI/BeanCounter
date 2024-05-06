const ExpenceSchema=require("../Model/expence.model")

exports.addExpence=async (req,res)=>{
    const {title, amount, catagory, description, date}=req.body
    const expence=ExpenceSchema({
        title,
        amount,
        catagory,
        description,
        date
    })
    // console.log(Expence)

    try {
        if(!title || !catagory || !description || !date){
            return res.status(400).json({message: "All fields are required"})
        }
        if(amount <=0 || !amount ==='number'){
            return res.status(400).json({message: "Amount Must be a positive number."})
        }
        await expence.save()
        res.status(200).json({message:"Expence Added"})
    } catch (error) {
        res.status(500).json({message:"Server Error"})
    }
}

exports.getExpences=async (req, res)=>{
    try {
        const expence=await ExpenceSchema.find().sort({createdAt: -1})
        res.status(200).json(expence)
    } catch (error) {
        res.status(500).json({message:"server error"})   
    }
}

exports.deleteExpence=async (req, res)=>{
    const {id}=req.params
    ExpenceSchema.findByIdAndDelete(id)
        .then((expence)=>{
            res.status(200).json({message:"Expence Deleted Successfully"})
        }).catch((err)=>{res.status(500).json({message:"Error deleting"})})
}