const [
  processCreateUserRequest,
  fetchAllDoctors,
] = require("../service/doctor-registration-service");

const createDoctor = async (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;
  await processCreateUserRequest(userName, password);
  res.status(200).send("Doctor has been created");
};

const getAllDoctors = async (req, res) => {
  // console.log(req.query);
  // const userName = req.query.userName;
  // const password = req.query.password;
  // console.log(temp);
  try {
    const admins = await fetchAllDoctors();
    // console.log(admins[0].hashedPassword);
    // if (admins.length>0 && admins[0].hashedPassword === password) {
    res.status(200).send(admins);
    // } else {
    // res.status(200).send();
    // }
    console.log("fetchAllDoctorsCalled");
  } catch (err) {
    console.log(err);
  }
};

module.exports = [createDoctor, getAllDoctors];