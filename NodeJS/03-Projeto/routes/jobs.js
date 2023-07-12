const express = require('express');
const router=express.Router();
const Job= require('../models/Job');

//test route
router.get('/test', (req, res)=>{
  res.send('Deu certo!')
}
)
//add jobs via post

router.post('/add', (req, res)=>{
  let{title,salary,company,description,email,new_job}=req.body

  //insert
  Job.create({
    title,
    description,
    salary,
    company,
    email,
    new_job
  }).then(
    ()=>{
      res.redirect('/')
    }
  ).catch(
    (error)=>{
      console.log(error)} 
  )
})

module.exports=router
