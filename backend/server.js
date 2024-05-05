const express = require('express');

const mongoose = require('mongoose');

const cors = require('cors');

const session = require("express-session")

const routes = require('./Router');

const app = express();

const PORT = "5000";

app.use(cors());
app.use(express.json())

app.use(routes);

mongoose.connect("mongodb://localhost:27017/rohitDB",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    app.listen(PORT,(req,res) => {
        console.log("port connected")
    })
});




