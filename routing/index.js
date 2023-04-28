const express = require('express');
const router = express.Router();
const {resolve}= require('path');
const {homePage,servicePage,contactPage} = require('../controlers/app.controllers');


//ROUTING
/*router.get('/',(req,res)=>{
  
    res.sendFile(resolve('home.html'));
})*/
router.get('/',homePage)

router.get('/service',servicePage);


router.get('/contact',contactPage)