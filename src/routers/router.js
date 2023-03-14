const express = require("express");
const router = new express.Router();
const Register = require("../models/register"); 
const {registerStudent , getStudents , UpdateStudent , DeleteStudent , Userlogin} = require("../controllers/controllers")


router.route("/register").post(registerStudent);
router.route("/register").get(getStudents);
router.route("/register/:id").patch(UpdateStudent);
router.route("/register/:id").delete(DeleteStudent);
router.route("/login").post(Userlogin);


module.exports = router;