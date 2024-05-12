const [
  processCreateUserRequest,
  fetchAdmin,
] = require("../service/admin-registration-service");

const createAdmin = async (req, res) => {
  const userName = req.body.userName;
  const password = req.body.password;
  await processCreateUserRequest(userName, password);
  res.status(200).send("Admin has been created");
};

const getAdmin = async (req, res) => {
  // console.log(req.query);
  const userName = req.query.userName;
  const password = req.query.password;
  // console.log(temp);
  try {
    const admins = await fetchAdmin(userName);
    // console.log(admins[0].hashedPassword);
    if (admins.length > 0 && admins[0].hashedPassword === password) {
      res.status(200).send("User Found!");
    } else {
      res.status(200).send();
    }
  } catch (err) {
    console.log(err);
  }
};

module.exports = [createAdmin, getAdmin];
