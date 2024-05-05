const User = require("./model/User")
const express = require("express")
const Router = express.Router();

Router.post("/validate-login",(req,res) => {
    const { email , password } = req.body;
    User.findOne({email:email }).then((result) => {
        if(result){
            if(result.password == password){
                res.status(200).json("Success")
            }else{
                res.status(200).json("Invalid")
            }
        }else{
            res.status(200).json("Invalid")
        }
    }).catch((err) => {
        res.json("Something Wrong")
    });
});

Router.post("/save-registration",(req,res) => {
    User.create(req.body)
    .then((result) => {
        res.cookie('userLogged', 'true');
        res.json(result);
    })
    .catch((error) => {
        res.json("error");
    });
});


module.exports = Router;