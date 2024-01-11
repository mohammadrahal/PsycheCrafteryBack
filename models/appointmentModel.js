const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const appointment = new Schema({

  therapistId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'THERAPY',
    required: true
  },

  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'USER',
    required: true
  },
  
  appointmentDate: Date,

  status: {
    type: String,
    enum: ['pending', 'confirmed', 'cancelled'],
    default: 'pending'
  },
});

const Appointment =model('Appointment', appointment);
module.exports = Appointment;
