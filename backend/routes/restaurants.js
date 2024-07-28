const express = require('express')
const Restaurant = require('../models/restaurantModel')

const router = express.Router()

//GET all restaurants
router.get('/',(req,res)=>{
    res.json({mssg: 'GET all restaurants'})
})

//GET a single restaurant
router.get('/:id',(req,res)=>{
    res.json({mssg: 'GET a single restaurants'})
})

//POST a new restaurant
router.post('/', async(req,res)=>{
    const {name, photo_href, cuisine, eta, distance_in_km, rating, buy_link} = req.body

    try {
        const restaurant = await Restaurant.create({name, photo_href, cuisine, eta, distance_in_km, rating, buy_link})
        res.status(200).json(restaurant)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})

//UPDATE a Gen AI image link
router.patch('/:id',(req,res)=>{
    res.json({mssg: 'UPDATE a gen AI image link link'})
})
module.exports = router