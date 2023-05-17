import express from 'express';
import Activity from './activityModel.js';
import axios from 'axios';

const router = express.Router();

router.post('/', async (req, res) => {
  await Activity.deleteMany({});

  for (let index = 0; index < 20; index++) {
    axios
      .get(`https://www.boredapi.com/api/activity`)
      .then((response) => {
        console.log(response.data);
        Activity.create(response.data);
      })
      .catch((error) => {
        console.log('Error fetching data');
        res.status(401).json({ message: 'Error fetching data' });
      });
  }
  res.status(200).json({ message: 'successfully updated data' });
});

router.get('/', async (req, res) => {
  const type = req.body.type;
  var condition = type ? { type: type } : {};

  const activities = await Activity.find(condition);

  if (activities) {
    res.status(200).json({ activities, count: activities.length });
  } else {
    res.status(404).json({ message: 'Activities not found' });
  }
});

export default router;
