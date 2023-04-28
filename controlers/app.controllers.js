

const {resolve}= require('path');


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