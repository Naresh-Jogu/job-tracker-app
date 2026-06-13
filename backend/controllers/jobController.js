const Job = require("../models/Job")


const createJob = async(req, res)=>{
    try{
        // step 1: get data from request
        const {company, role, status, notes, appliedDate} = req.body
        const {id} = req.user

        const job = await Job.create({
            company,
            role,
            status,
            notes,
            appliedDate,
            userId :id

        })
        res.status(201).json(job)

    }catch(err){
        return res.status(500).json({message: err.message})
    }
}


const getJobs = async(req, res)=>{
    try{
        const {id} = req.user
        const jobs = await Job.find({userId: id})
        res.status(200).json(jobs)


    }catch(err){
        return res.status(500).json({message: err.message})
    }
}


const updateJob = async(req, res)=>{
    try{
        const id = req.params.id
        const updatedJob = await Job.findByIdAndUpdate(
            id,
            req.body,
            {new: true} 
        )
        res.status(200).json(updatedJob)

    }catch(err){
        return res.status(500).json({message: err.message})
    }
}


const deleteJob = async(req, res)=>{
    try{
        const id = req.params.id
        const deletedJob = await Job.findByIdAndDelete(id)
        res.status(200).json({message: "Job Deleted Successfully"})

    }catch(err){
        res.status(500).json({message: err.message})
    }
}


module.exports = {createJob, getJobs, updateJob, deleteJob}