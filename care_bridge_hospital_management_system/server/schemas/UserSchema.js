const mongoose = require("../db");

const userProfileSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  hashedPassword: {
    type: String,
    require: true,
  },
});

const doctorProfileSchema = new mongoose.Schema({
  userName: {
    type: String,
    require: true,
  },
  hashedPassword: {
    type: String,
    require: true,
  },
  appointmentDates: {
    type: [Date],
  },
});

const UserProfile = new mongoose.model("UserProfile", userProfileSchema);
const AdminProfile = new mongoose.model("admin", userProfileSchema);
const DoctorProfile = new mongoose.model("doctor", doctorProfileSchema);
const PatientProfile = new mongoose.model("patient", userProfileSchema);

module.exports = {
  UserProfile,
  AdminProfile,
  DoctorProfile,
  PatientProfile,
};
