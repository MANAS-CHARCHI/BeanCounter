const mongoose=require('mongoose')

const db=async ()=>{
    try{
        mongoose.set('strictQuery', false)
        await mongoose.connect(process.env.Mongo_URL)
        console.log("DB Connected")
    }catch(error){
        console.log("DB connection failed : ", error)
    }
}
module.exports={db}