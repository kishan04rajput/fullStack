const express = require("express");
const router = express.Router();

// const healthCheck = require("../controllers/HealthCheckController");
const [
  createAdmin,
  getAdmin,
] = require("../controllers/AdminRegistrationController");
const [
  createDoctor,
  getAllDoctors,
] = require("../controllers/DoctorRegistrationController");
const createPatient = require("../controllers/PatientRegistrationController");

// router.route("/healthCheck").get(healthCheck);
router.route("/createAdmin").post(createAdmin);
router.route("/createDoctor").post(createDoctor);
router.route("/createPatient").post(createPatient);
router.route("/getAdmin").get(getAdmin);
router.route("/getALLDoctors").get(getAllDoctors);
// router.route("/getDoctor").get(getDoctor);
// router.route("/getPatient").get(getPatient);

module.exports = router;
