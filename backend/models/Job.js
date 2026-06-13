const mongoose = require("mongoose")


const jobSchema = mongoose.Schema({
    // job fields

    userId : {
        type : mongoose.Schema.Types.ObjectId,
        ref : "User",
        required: true
    },
    company : {
        type : String,
        required: true
    },
    role : {
        type: String,
        required : true
    },
    status : {
        type : String,
        enum : ["Applied", "Interview", "Offer", "Rejected"],
        default: "Applied"
    },
    appliedData : {
        type: Date,
        default: Date.now
    },
    platform: {
        type:String,
        enum: ["Linkedin", "Naukri", "Internshala", "Wellfound", "Company Website", "Other"],
        defualt: "Other"
    },
    notes : {
        type: String
    }


}, {timestamps: true})


module.exports = mongoose.model("Job", jobSchema)