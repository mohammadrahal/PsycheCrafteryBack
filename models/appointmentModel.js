const mongoose = require("mongoose");
const { Schema, model } = mongoose;
const appointmentSchema = new Schema({
  therapistId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Therapist',
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

const Appointment =model('Appointment', appointmentSchema);
module.exports = Appointment;
