const {
  UserProfile,
  AdminProfile,
  DoctorProfile,
  PatientProfile,
} = require("../schemas/UserSchema");

async function createPatient(userName, password) {
  const user = new PatientProfile({
    userName: userName,
    hashedPassword: password,
  });
  user.save();
}

module.exports = createPatient;
