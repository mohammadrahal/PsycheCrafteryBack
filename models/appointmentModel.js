const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const appointment = new Schema({

  therapistId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'therapy',
    required: true
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  
  appointmentDate: { type: Date, required: true },

  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  },
});

const Appointment =model('Appointment', appointment);
module.exports = Appointment;


