const express = require("express");
const router = express.Router();

module.exports = ({ getApplyUserPosts, applyUserPosts }) => {
  router.get("/", (req, res) => {
    getApplyUserPosts()
      .then((posts) => res.json(posts))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });
  // JOINING TABLE - USERS-POSTS

  router.post("/", (req, res) => {
    const { users_id, post_id } = req.body;

    applyUserPosts(users_id, post_id)
      .then((newApply) => res.json(newApply))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });

  return router;
};
