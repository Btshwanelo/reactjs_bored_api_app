import express from 'express';
import Activity from './activityModel.js';
import axios from 'axios';

const router = express.Router();

const http = 'https://www.boredapi.com/api/activity';

// Post data from bored API
// @route   POST /api
// @access  Public
router.post('/', async (req, res) => {
  await Activity.deleteMany({});

  // Get 20 records and post them to mongoDB
  for (let index = 0; index < 20; index++) {
    axios
      .get(http)
      .then((response) => {
        Activity.create(response.data);
      })
      .catch((error) => {
        res.status(401).json({ message: 'Error fetching data' });
      });
  }
  res.status(200).json({ message: 'successfully updated data' });
});

// @desc    Get data from database
// @route   Get /api/
// @access  Public
router.get('/', async (req, res) => {
  const type = req.query.type;
  var condition = type ? { type: type } : {};

  const activities = await Activity.find(condition);

  if (activities) {
    res.status(200).json({ activities, count: activities.length });
  } else {
    res.status(404).json({ message: 'Activities not found' });
  }
});

export default router;
