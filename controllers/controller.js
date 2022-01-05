const Task = require('./../models/mode')

const getTask = async(req,res)=>{
    try{
         const task = await Task.find({})
    res.json({task})
    }
    catch(err){
        res.status(500).json({msg:err})
    }
   
}


const postTask = async(req,res)=>{
    try{
         const task = await Task.create(req.body)
    res.status(201).json({task})
    }
    catch(err){
        res.status(500).json({msg:err})
    }
   
}

const getTaskWithId = async(req,res)=>{
    try{
        const {id} = req.params
    const task = await Task.find({_id:id})
    res.json({task})
    }
    catch(err){
        res.status(500).json({msg:err})
    }


    
}

const updateTask = async(req,res)=>{
    try{
        const {id} = req.params
        const task = await Task.findOneAndUpdate({_id:id},req.body)
    }
    catch(err){
        res.status(500).json({msg:err})
    }
    
}

const deleteTask = (req,res)=>{
    try{
        const {id} = req.params
        const task = await Task.findOneAndDelete({_id:id})
    }
    catch(err){
        res.status(500).json({msg:err})
    }}

module.exports = {getTask,postTask,updateTask,deleteTask,getTaskWithId}