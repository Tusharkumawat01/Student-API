const express = require('express');
const Student = require('../models/student.js');


const router = express.Router();

router.post('/', async(req,res) => {
    try{
        const student = new Student({
            name: req.body.name,
            age: req.body.age,
            email: req.body.email
        });
        await student.save();
        res.status(201).json({message: "user created", student});
    }
    catch(err)
    {
        res.status(400).json({error: err.message});
    }
});


router.get('/',async(req,res) => {
    try{
        const students = await Student.find();
        res.json(students);
    }
    catch(err)
    {
        res.status(400),json({error: err.message});
    }
});


router.get('/:id', async(req,res) => {
    try{
        const students = await Student.findById(req.params.id);
        if(!students) res.status(404).json({error: err.message});
        res.json(students);
    }
    catch(err)
    {
        res.status(400).json({error: err.message});
    }
});


router.put('/:id',async(req,res) =>{
    try{
        const updatedStudents = await Student.findByIdAndUpdate(req.params.id, req.body , {new: true , runValidators: true});
        if(!updatedStudents) res.status(404).json({error: err.message});
        res.json(updatedStudents);
    }
    catch(err)
    {
        res.status(400).json({error: err.message});
    }
});


router.delete('/:id',async(req,res) => {
    try{
        const deletedStudents = await Student.findByIdAndDelete(req.params.id);
        if(!deletedStudents) res.status(404).json({error:err.message});
        res.json(deletedStudents);
    }
    catch(err){
        res.status(400).json({error: err.message});
    }
});

module.exports = router;