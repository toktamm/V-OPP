const express = require("express");
const app = express();
const router = express.Router();
const { getPostsByUsers } = require("../helpers/dataHelpers");
var jwt = require("jsonwebtoken");

// hashed passwords
const bcrypt = require("bcrypt");
const salt = bcrypt.genSaltSync(12);

module.exports = ({
  getUsers,
  getUserByEmail,
  addUser,
  getUsersPosts,
  applyUserPosts,
}) => {
  /* GET users listing. */

  const register = (first_name, last_name, email, password, phone, address) => {
    return getUserByEmail(email)
      .then((user) => {
        console.log("getUserByEmail returned", user);
        if (user) {
          return null;
        }
        password = bcrypt.hashSync(password, salt);
        return { first_name, last_name, email, password, phone, address };
      })
      .then((user) => {
        console.log("register function user: ", user);
        if (!user) {
          return null;
        }
        return addUser(user);
      });
  };

  router.get("/", (req, res) => {
    getUsers()
      .then((users) => res.json(users))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  router.get("/posts", (req, res) => {
    getUsersPosts()
      .then((usersPosts) => {
        const formattedPosts = getPostsByUsers(usersPosts);
        res.json(formattedPosts);
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  // THIS IS WHERE REGISTER POST IS COMING FROM FRONT_END
  // this is a POST request to api/users/

  router.post("/", (req, res) => {
    let { first_name, last_name, email, password, phone, address } = req.body;

    // user registration form data
    console.log("req.body is ", req.body);

    // add all the new user info to the db

    getUserByEmail(email)
      .then((user) => {
        if (user) {
          console.log("This is user:", user);

          return res.json({
            msg: "Sorry, a user account with this email already exists",
          });
        } else {
          // store hashsed password
          password = bcrypt.hashSync(password, salt);
          // console.log("This is a new user with hashed password = ", password)

          // addUser works
          return addUser(
            first_name,
            last_name,
            email,
            password,
            phone,
            address
          );
        }
      })
      .then((newUser) => {
        console.log("new user id: ", newUser.id);

        const token = jwt.sign({ email: newUser.email }, "secretKey");
        let result = { user: newUser, token: token };

        res.json(result);
        res.redirect("/");
      })
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  // // this is a POST request to api/users/register

  // router.post("/register", (req, res) => {

  //     const { first_name, last_name, email, password, phone, address } = req.body;
  //     register(first_name, last_name, email, password, phone, address, database)
  //         .then(user => {
  //             if (!user) {
  //                 res.redirect("/error_message");
  //                 return;
  //             }
  //             req.session.userId = user.id;
  //             res.redirect("/");
  //         })
  //         .catch((error) => res.send(error.message));
  // });

  // login

  const login = function (email, password) {
    return getUserByEmail(email)
      .then((user) => {
        if (user) {
          console.log("user in login is: ", user);
          if (bcrypt.compareSync(password, user.password)) {
            return user;
          }
        } else {
          return null;
        }
      })
      .catch((error) => {
        console.log(`err on login function :${error}`);
        res.json({ error: error.message });
      });
  };

  router.post("/login", (req, res) => {
    const { email, password } = req.body;
    console.log("req body inside post login: ", req.body);
    login(email, password)
      .then((user) => {
        // console.log('user inside post login .then: ', user)
        if (!user) {
          res.json("Failed login");
        } else if (req.body.email === "admin@volunteer.com") {
          const token = jwt.sign({ email: user.email }, "secretKey");
          let result = { user: user, token: token };
          console.log(`logged in admin: ${user}`);
          return res.json(result);
        } else {
          const token = jwt.sign({ email: user.email }, "secretKey");
          let result = { user: user, token: token };
          console.log(`logged in normal user: ${user}`);
          return res.json(result);
        }
      })
      .catch((error) => {
        console.log(`err on login :${error}`);
        res.json({ error: error.message });
      });
  });

  router.post("/logout", (req, res) => {
    const token = jwt.sign({ email: newUser.email }, "secretKey");

    res.redirect("/");
  });

  return router;
};
