if(process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}
const express = require("express"); 
const ejs = require("ejs"); // template engine
const app = express(); 
const bodyParser = require("body-parser"); // for parsing request bodies
const { static } = require("express");     // static files handling
const path = require('path');
const mongoose = require("mongoose");


// AUTH
const session = require("express-session");
const res = require("express/lib/response");
const passport = require("passport")
const passportLocalMongoose = require("passport-local-mongoose")
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate = require('mongoose-findorcreate')

// TODO: Express specific stuff
app.set('view engine', 'ejs');  
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());   
app.use(express.static("public")); 


// MONGODB
mongoose.connect(`mongodb://127.0.0.1:27017/users?directConnection=true&serverSelectionTimeoutMS=2000`, { useNewUrlParser: true });

const userSchema = new mongoose.Schema({
    user: String,
    password: String,
    googleId: String,
    fleets: []
})


