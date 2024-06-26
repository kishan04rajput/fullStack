// const AdminProfile = require("../schemas/UserSchema");
const {
  UserProfile,
  AdminProfile,
  DoctorProfile,
  PatientProfile,
} = require("../schemas/UserSchema");

async function createDoctor(userName, password) {
  const user = new DoctorProfile({
    userName: userName,
    hashedPassword: password,
    appointmentDates: [1,2,3]
  });
  user.save();
}

async function getAllDoctors() {
  // console.log(temp);
  return DoctorProfile.find({});
}

module.exports = [createDoctor, getAllDoctors];