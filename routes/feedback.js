const express = require('express');
const Feedback = require('../models/Feedback');
const router = express.Router();

// Obtener todos los feedbacks
router.get('/', async (req, res) => {
  try {
    const feedbacks = await Feedback.find();
    res.json(feedbacks);
  } catch (err) {
    res.status(500).send(err);
  }
});

// Agregar un nuevo feedback
router.post('/', async (req, res) => {
  const newFeedback = new Feedback(req.body);
  try {
    const savedFeedback = await newFeedback.save();
    res.status(201).json(savedFeedback);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;