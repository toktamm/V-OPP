const express = require("express");
const auth = express.Router();
const database = require("../dbHelper");
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(12);

module.exports = (db) => {

  const register = (firstName, lastName, email, phone, address, password) => {
    return database.findUserByEmail(email)
      .then(user => {
        if (user) {
          return null;
        }
        password = bcrypt.hashSync(password, salt);
        return { firstName, lastName, email, phone, address, password };
      })
      .then(user => {
        console.log('register function user: ', user);
        if (!user) {
          return null;
        }
        return database.addUser(user);
      })
  }


  auth.post("/register", (req, res) => {

    const { firstName, lastName, email, phone, address, password } = req.body;
    register(firstName, lastName, email, phone, address, password)
      .then(user => {
        req.session.userId = user.id;
        res.redirect("/");
      })
      .catch((error) => res.send(error.message));
  });

  const login = function (email, password) {
    return database.getUserByEmail(email)
      .then(user => {
        if (bcrypt.compareSync(password, user.password)) {
          return user;
        }
        return null;
      });
  }

  auth.post("/login", (req, res) => {
    const { email, password } = req.body;
    login(email, password)
      .then(user => {
        if (!user) {
          return;
        }  else {
          req.session.userId = user.id;
          res.redirect("/");
        }
      })
      .catch(error => {console.log(err)});
  });


  auth.post("/logout", (req, res) => {
    req.session.userId = null;
    res.redirect("/");
  });
  return auth;
};



