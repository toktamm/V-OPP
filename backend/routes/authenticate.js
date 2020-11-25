const express = require('express');
const router = express.Router();
const {
  getPostsByUsers
} = require('../helpers/dataHelpers');

const {
  getUserByEmail
} = require('../helpers/dbHelpers');



const usersRoutes = require("./routes/users");



// delete probably?
// const router = express.Router();     could be name auth instaed or router
// const database = require("../database");


// hashed passwords
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(12);


module.exports = ({
  getUsers,
  getUserByEmail,
  addUser,
  getUsersPosts
}) => {

  const register = (first_name, last_name, email, password, phone, address) => {
    return getUserByEmail(email)
      .then(user => {
        console.log("getUserByEmail returned", user)
        if (user) {
          return null;
        }
        password = bcrypt.hashSync(password, salt);
        return { first_name, last_name, email, password, phone, address };
      })
      .then(user => {
        console.log('register function user: ', user);
        if (!user) {
          return null;
        }
        return addUser(user);
      })
  }


  router.post("/register", (req, res) => {

    const { first_name, last_name, email, password, phone, address } = req.body;
    register(first_name, last_name, email, password, phone, address, database)
      .then(user => {
        if (!user) {
          res.redirect("/error_message");
          return;
        }
        req.session.userId = user.id;
        res.redirect("/");
      })
      .catch((error) => res.send(error.message));
  });

  const login = function(email, password) {
    return getUserByEmail(email)
      .then(user => {
        // console.log('user in login is: ', user)
        if (bcrypt.compareSync(password, user.password)) {
          return user;
        }
        return null;
      });
  }


  router.post("/login", (req, res) => {
    const { email, password } = req.body;
    // console.log('req body inside post login: ', req.body)
    login(email, password)
      .then(user => {
        // console.log('user inside post login .then: ', user)
        if (!user) {
          return;
        } else if (req.body.email === "admin@volunteer.com") {
          res.redirect("/admin");
        } else {
          req.session.userId = user.id;
          res.redirect("/");
        }
      })
      .catch(error => res.redirect("/error_message2"));
  });


  router.post("/logout", (req, res) => {
    req.session.userId = null;
    res.redirect("/");
  });
  
  return router;
};