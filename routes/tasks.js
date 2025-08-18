const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// GET /tasks endpoint ko search aur filter functionality ke liye badal rahe hain
router.get('/', async (req, res) => {
    try {
        const { search, status } = req.query; 
        let query = {}; 

        if (search) {
            query = {
                $or: [
                    { title: { $regex: search, $options: 'i' } },
                    { description: { $regex: search, $options: 'i' } }
                ]
            };
        }

        if (status && status !== 'All') {
            query.status = status;
        }

        const tasks = await Task.find(query);
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new task
router.post('/', async (req, res) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
        status: req.body.status || 'Pending'
    });
    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Update a task
router.put('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        task.title = req.body.title || task.title;
        task.description = req.body.description || task.description;
        task.status = req.body.status || task.status;
        const updatedTask = await task.save();
        res.json(updatedTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a task
router.delete('/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        if (!task) {
            return res.status(404).json({ message: 'Task not found' });
        }
        await Task.deleteOne({ _id: req.params.id });
        res.json({ message: 'Task deleted successfully' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Get task progress
router.get('/progress', async (req, res) => {
    try {
        const totalCount = await Task.countDocuments();
        const completedCount = await Task.countDocuments({ status: 'Completed' });

        if (totalCount === 0) {
            return res.json({ completedPercentage: 0 });
        }

        const completedPercentage = (completedCount / totalCount) * 100;

        res.json({ completedPercentage });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;