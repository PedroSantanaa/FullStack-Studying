const express = require('express');
const router=express.Router();
const Job= require('../models/Job');

//test route
router.get('/test', (req, res)=>{
  res.send('Deu certo!')
}
)
//Job view
router.get('/view/:id',(req,res)=>{
  Job.findOne({
    where:{id:req.params.id}
  }).then(job=>{
    res.render('viewJob',{
      job
    })
  }).catch(error=>console.log(error))
})

//add job via get
router.get('/add', (req, res)=>{
  res.render('add')
})
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
