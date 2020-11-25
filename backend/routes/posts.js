const express = require("express");
const router = express.Router();

module.exports = ({ getPosts }) => {
  router.get("/", (req, res) => {
    getPosts()
      .then((posts) => res.json(posts))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  return router;
};
