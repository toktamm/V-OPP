// module.exports = (db) => {
//   const getUsers = () => {
//     const query = {
//       text: "SELECT * FROM users",
//     };

//     return db
//       .query(query)
//       .then((result) => result.rows)
//       .catch((err) => err);
//   };

//   const getUserByEmail = (email) => {
//     const query = {
//       text: `SELECT * FROM users WHERE email = $1`,
//       values: [email],
//     };

//     return db
//       .query(query)
//       .then((result) => result.rows[0])
//       .catch((err) => err);
//   };

//   const addUser = (firstName, lastName, email, password, phone, address) => {
//     const query = {
//       text: `INSERT INTO users (first_name, last_name, email, password, phone, address) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
//       values: [firstName, lastName, email, password, phone, address],
//     };

//     return db
//       .query(query)
//       .then((result) => {
//         console.log("result is ", result);
//         return result.rows[0];
//       })
//       .catch((err) => {
//         console.log("error is: ", err);
//         return err;
//       });
//   };

//   const getUsersPosts = () => {
//     const query = {
//       text: `SELECT users.id as user_id, first_name, last_name, email, posts.id as post_id, category, title, organization, description, thumbnail_photo_url
//       FROM users
//       INNER JOIN posts
//       ON users.id = posts.user_id`,
//     };

//     return db
//       .query(query)
//       .then((result) => result.rows)
//       .catch((err) => err);
//   };

//   const getPosts = () => {
//     const query = {
//       text: "SELECT * FROM posts ORDER BY start_date DESC;",
//     };

//     return db
//       .query(query)
//       .then((result) => result.rows)
//       .catch((err) => err);
//   };

//   const getCategories = () => {
//     const query = {
//       text: "SELECT * FROM posts WHERE category = $1;",
//     };

//     return db
//       .query(query)
//       .then((result) => result.rows)
//       .catch((err) => err);
//   };

//   return {
//     getUsers,
//     getUserByEmail,
//     addUser,
//     getUsersPosts,
//     getPosts,
//     getCategories,
//   };
// };

module.exports = (db) => {
  const getUsers = () => {
    const query = {
      text: "SELECT * FROM users",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getUserByEmail = (email) => {
    const query = {
      text: `SELECT * FROM users WHERE email = $1`,
      values: [email],
    };

    return db
      .query(query)
      .then((result) => result.rows[0])
      .catch((err) => err);
  };

  const addUser = (firstName, lastName, email, password, phone, address) => {
    const query = {
      text: `INSERT INTO users (first_name, last_name, email, password, phone, address) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      values: [firstName, lastName, email, password, phone, address],
    };

    return db
      .query(query)
      .then((result) => {
        console.log("result is ", result);
        return result.rows[0];
      })
      .catch((err) => {
        console.log("error is: ", err);
        return err;
      });
  };

  const addApplication = (post) => {
    const query = {
      text: `INSERT INTO users (post) VALUES ($1) RETURNING *`,
      values: [post],
    };

    return db
      .query(query)
      .then((result) => {
        console.log("result is ", result);
        return result.rows[0];
      })
      .catch((err) => {
        console.log("error is: ", err);
        return err;
      });
  };



  const getUsersPosts = () => {
    const query = {
      text: `SELECT users.id as user_id, first_name, last_name, email, posts.id as post_id, category, title, organization, description, thumbnail_photo_url
      FROM users
      INNER JOIN posts
      ON users.id = posts.user_id`,
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getPosts = () => {
    const query = {
      text: "SELECT * FROM posts ORDER BY date_posted DESC;",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const addPost = (
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
    user_id
  ) => {
    const query = {
      text: `INSERT INTO posts (
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
        additional_info, user_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *`,
      values: [
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
        user_id,
      ],
    };

    return db
      .query(query)
      .then((result) => {
        console.log("result is ", result);
        return result.rows[0];
      })
      .catch((err) => {
        console.log("error is: ", err);
        return err;
      });
  };

  const getCategories = () => {
    const query = {
      // text: "SELECT * FROM posts WHERE category = 'Community';",
      text: "SELECT * FROM posts;",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const getApplyUserPosts = () => {
    const query = {
      text:
        "SELECT apply_users.users_id, apply_users.post_id, posts.title, posts.organization, posts.category, posts.description, users.id FROM ((apply_users INNER JOIN users ON apply_users.users_id = users.id) INNER JOIN posts ON apply_users.post_id = posts.id);",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const applyUserPosts = (users_id, post_id) => {
    const query = {
      text: `INSERT INTO apply_users (
        users_id,
        post_id) VALUES ($1, $2) RETURNING *`,
      values: [users_id, post_id],
    };

    return db
      .query(query)
      .then((result) => {
        return result.rows[0];
      })
      .catch((err) => {
        return err;
      });
  };

  return {
    getUsers,
    getUserByEmail,
    addUser,
    addApplication,
    getUsersPosts,
    getPosts,
    addPost,
    getCategories,
    getApplyUserPosts,
    applyUserPosts,
  };
};
