const processCreateUserRequest = require("../service/patient-registration-service");

const createPatient = async (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;
  await processCreateUserRequest(userName, password);
  res.status(200).send("Patient has been created");
};

module.exports = createPatient;