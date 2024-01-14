const Appointment = require("../models/appointmentModel");

const getappiot = async (_, res) => {
  const appointment = await Appointment.find({});
  if (!appointment || appointment.length === 0) {
    return res.status(404).json({
      success: false,
      message: "no appointment found",
    });
  }
  try {
    return res.status(200).json({
      success: true,
      data: appointment,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

const request = async (req, res) => {
  const { userId, therapistId, appointmentDate } = req.body;
  const appointment = new Appointment({
    userId,
    therapistId,
    appointmentDate : new Date(appointmentDate),
  });

  try {
    const existingAppointment = await Appointment.findOne({
      therapistId,
      appointmentDate,
    });

    if (existingAppointment) {
      return res.status(400).json({ message: "This therapy already booked." });
    }

    const newAppointment = await appointment.save();
    res.status(200).json({
      success: true,
      message: "Appointment successfully added",
      data: newAppointment,
    });
  } catch (error) {
    console.log(error)
    res.status(400).json({
      success:false,
      message: error.message,
    });
  }
};


//   accepet
const accepted = async (req, res) => {
  const { ID } = req.params;
  try {
    const appointment = await Appointment.findByIdAndUpdate(
      ID,
      { status: "confirmed" },
      { new: true }
    );
    res.status(200).json({
      success: true,
      message: appointment,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// cancel
const canceled = async (req, res) => {
  const { ID } = req.params;
  try {
    const cancelled = await Appointment.findByIdAndUpdate(
      ID,
      { status: "cancelled" },
      { new: true }
    );

    if (!cancelled) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Appointment successfully cancelled",
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getappiot,
  request,
  accepted,
  canceled,
};
