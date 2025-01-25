import mongoose  from "mongoose";

const reportSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    status:{
        type:String,
        required:true,
        default:"Pending"
    },
    reportedBy:{
        type:String,
        required:true
    }
})

const Report = mongoose.models.Report || mongoose.model("Report",reportSchema)

export default Report