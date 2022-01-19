module.exports = () => {
    'use strict';
    const express = require("express");
    var fleetRoute = express.Router();
    fleetRoute.route("/fleets")
    .get((req,res)=>{
        res.render("fleets", { fleets: fleetsObj })
    }).post((req,res)=>{
        res.redirect("/addfleet")
    })
    return fleetRoute;
};