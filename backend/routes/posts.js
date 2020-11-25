const express = require("express");
const router = express.Router();
module.exports = ({ getPosts, addPost }) => {
  router.get("/", (req, res) => {
    getPosts()
      .then((posts) => res.json(posts))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });


  router.post("/", (req, res) => {
    const {
      user_id,
      category,
      title,
      organization,
      positions_available,
      description,
      thumbnail_photo_url,
      street,
      city,
      province,
      post_code,
      date_posted,
      start_date,
      requirements,
      additional_info,
    } = req.body;

    console.log("req.body is ", req.body);
    addPost(
      user_id,
      category,
      title,
      organization,
      positions_available,
      description,
      thumbnail_photo_url,
      street,
      city,
      province,
      post_code,
      date_posted,
      start_date,
      requirements,
      additional_info
    )
      .then((newPost) => res.json(newPost))
      .catch((err) =>
        res.json({
          error: err.message,
        })
      );
  });
  return router;
};
