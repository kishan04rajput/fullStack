const {
  UserProfile,
  AdminProfile,
  DoctorProfile,
  PatientProfile,
} = require("../schemas/UserSchema");

async function createAdmin(userName, password) {
  const user = new AdminProfile({
    userName: userName,
    hashedPassword: password,
  });
  user.save();
}

async function getAdmin(temp){
  // console.log(temp);
  return AdminProfile.find({"userName":temp});
}

module.exports = [createAdmin, getAdmin];