import mongoose from 'mongoose';

const ActivitySchema = mongoose.Schema({
  activity: {
    type: String,
  },
  type: {
    type: String,
  },
  participants: {
    type: Number,
  },
  price: {
    type: Number,
  },
  link: {
    type: String,
  },
  key: {
    type: String,
  },
  accessibility: {
    type: Number,
  },
});

const Activity = mongoose.model('Activity', ActivitySchema);

export default Activity;
