const express=require('express');

const router=express.Router();

router.get('/',(req,res)=>{
    res.render('HomePage')
})

router.get('/Products',(req,res)=>{
    res.send('Products page')
})

module.exports=router;