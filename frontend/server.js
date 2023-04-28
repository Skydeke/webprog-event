const express = require("express");
const app = express();


    app.get("/", (req, res) => {
    res.sendFile(__dirname + "/assets/login.html");
    });

    app.get('/login.css', function(req, res) {
        res.sendFile(__dirname + "/assets/login.css");
    });

    app.get('/admin', function(req, res) {
        res.sendFile(__dirname + "/assets/admin.html");
    });

  app.get('/admin.js', function(req, res) {
    res.sendFile(__dirname + "/assets/admin.js");
  });

  app.get('/script.js', function(req, res) {
    res.sendFile(__dirname + "/assets/script.js");
  });

app.listen(3000, () => {
    console.log("Application started and Listening on port 3000");
  });