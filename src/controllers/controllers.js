const express = require("express");
const router = new express.Router();
const Register = require("../models/register"); 

const registerStudent = async (req , res) => {
    try {
        const password = req.body.password;
        const cpassword = req.body.confirmpassword;
        if(password === cpassword) {
            const RegisterEmp = new Register({
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                email : req.body.email,
                gender : req.body.gender,
                phone : req.body.phone,
                age : req.body.age,
                password: password,
                confirmpassword: cpassword
            })
          const registertoDB =  await RegisterEmp.save();
          res.status(201).send(registertoDB);
        //   res.status(201).render(index);
        }
        else {  res.send("Password is not matching")}    }
    catch(e) {
        res.status(500).send(e);
    }
}
const getStudents =  async (req , res) => {
    const getdata = await Register.find();
    res.send(getdata);
}

const UpdateStudent = async (req, res)  => {
    const _id = req.params.id;
    const updateData = await Register.findByIdAndUpdate(_id , req.body , {new:true});
    res.send(updateData);
}

const DeleteStudent =  async (req , res) => {
    const deldata  = await Register.findByIdAndDelete(req.params.id);
    // if (!res.params.id) {   res.status(400).send(); }
    res.send(deldata);
}


const Userlogin =  async (req , res) => {
    try {
        const email = req.body.email;
        const password = req.body.password;
        console.log(`${email} and ${password}`);
        const userdetail = await Register.findOne({email:email});
        // res.send(useremail.password)
        // console.log(userdetail);

        if(userdetail.password === password)  {
            res.send("Login Succeed");
        }
        else {
            res.send("Invalid Login Details");
        }
    }
    catch(e)        {   console.log("Invalid Login Details");    }

}

module.exports = {registerStudent , getStudents , UpdateStudent , DeleteStudent , Userlogin};