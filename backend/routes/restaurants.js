const express = require('express')

const router = express.Router()

//GET all restaurants
router.get('/',(req,res)=>{
    res.json({mssg: 'GET all restaurants'})
})

//GET a single restaurant
router.get('/:id',(req,res)=>{
    res.json({mssg: 'GET a single restaurants'})
})

//UPDATE a Gen AI image link
router.patch('/:id',(req,res)=>{
    res.json({mssg: 'UPDATE a gen AI image link link'})
})
module.exports = router