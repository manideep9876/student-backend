const express = require('express')

const students = require('../models/studentModel.js')

const route = express.Router();


route.post('/addstudent', (req, res) => {
    const s = new students(req.body);
    s.save();
    res.status(201).json(s)
})



route.get('/studentlist', async (req, res) => {
    try {
        const studentlist = await students.find();
        res.status(201).json(studentlist);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Internal server error' })
    }
})




route.put('/updatestudent/:id', async (req, res) => {
    const updatestudent = await students.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    res.status(201).json(updatestudent)
});




route.delete('/deletestudent/:id', async (req, res) => {
    const deletestudent = await students.findByIdAndDelete(req.params.id)
    res.status(201).json(deletestudent)
})

module.exports = route