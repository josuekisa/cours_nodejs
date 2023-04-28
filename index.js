const express = require('express');
const app = express();
const {resolve} = require('path');



const nav = `
    <nav>
      <ul>
        <li><a href="/home">Accueil</a></li>
        <li><a href="/service">service</a></li>
        <li><a href="/contact">Contact</a></li>
      </ul>
    </nav>
  `;

 app.get('/',(req,res)=>{
    res.send(nav);
})

app.get('/home',(req,res)=>{
    res.sendFile(resolve('home.html'));
})

app.get('/service',(req,res)=>{
    res.sendFile(resolve('service.html'));
})

app.get('/contact',(req,res)=>{
    res.sendFile(resolve('contact.html'));
})


app.listen(3000);