const express = require("express");

const recordRoutes = express.Router();

const dbo = require("../db/conn");

const ObjectId = require("mongodb").ObjectId;

recordRoutes.route("/record/add").post(function (req,response) {
    let db_connect = dbo.getDb();
    let myobj = {
        name: req.body.name,
        warranty: req.body.warranty,
        manufdate: req.body.manufdate,
    };
    db_connect.collection("testcoll").insertOne(myobj, function (err,res) {
        if(err) throw err;
        response.json(res);
    });
});

module.exports = recordRoutes;