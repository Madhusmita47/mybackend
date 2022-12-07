const express = require('express');
const {getcoins}=require("../controller/cryptoController")
const router = express.Router();



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})
router.get("/getcoins",getcoins)



module.exports=router