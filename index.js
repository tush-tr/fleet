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
// mongoose.connect(`mongodb://127.0.0.1:27017/fleetdb?directConnection=true&serverSelectionTimeoutMS=2000`, { useNewUrlParser: true });

// const userSchema = new mongoose.Schema({
//     user: String,
//     password: String,
//     googleId: String,
//     fleets: []
// })

//  USE Passport mongoose
// userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate)
// const user = new mongoose.model("User",userSchema)
// passport.user(User.createStrategy())
// passport.serializeUser((user,done)=>{
//     done(null,user.id);
// })

// passport.deserializeUser((id,done)=>{
//     User.findById(id,(err,user)=>{
//         done(err,user)
//     })
// })

// passport.use(new GoogleStrategy({
//     clientID: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     callbackURL: "https://localhost:3000/auth/google/fleets",
//     userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
// },
// (accessToken,refreshToken, profile, cb){
//     User.findorCreate({googleId: profile.id},(err,user)=>{
//         return cb(err,user)''
//     })
// }
// ))

const fleetsObj = [
    "quote 2",
    "quote 1 "
]

// IMPORT ROUTES
const fleetsRoute = require("./routes/fleets")




// USE ROUTES
app.use("/r", fleetsRoute)




app.route("/").get((req,res)=>{
    res.render("home")
})

app.listen(3000,()=>{
    console.log("hello mr server")
})