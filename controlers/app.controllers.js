const express = require('express');
const router = express.Router();
const {resolve}= require('path');
//Controller 1

const homePage = (req,res)=>{
    res.sendFile(resolve('home.html'))
}
const servicePage = (req,res)=>{
    res.sendFile(resolve('service.html'))
}
const contactPage = (req,res)=>{
    res.sendFile(resolve('contact.html') )
}


module.exports={homePage, servicePage, contactPage};