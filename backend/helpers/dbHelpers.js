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
      text: "SELECT * FROM posts ORDER BY start_date DESC;",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  const addPost = (
    user_id,
    category,
    title,
    organization,
    positions_available,
    description,
    thumbnail_photo_url,
    country,
    street,
    city,
    province,
    post_code,
    date_posted,
    start_date,
    requirements,
    additional_info
  ) => {
    const query = {
      text: `INSERT INTO posts (user_id,
        category,
        title,
        organization,
        positions_available,
        description,
        thumbnail_photo_url,
        country,
        street,
        city,
        province,
        post_code,
        date_posted,
        start_date,
        requirements,
        additional_info) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16) RETURNING *`,
      values: [
        user_id,
        category,
        title,
        organization,
        positions_available,
        description,
        thumbnail_photo_url,
        country,
        street,
        city,
        province,
        post_code,
        date_posted,
        start_date,
        requirements,
        additional_info,
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
      text: "SELECT * FROM posts WHERE category = $1;",
    };

    return db
      .query(query)
      .then((result) => result.rows)
      .catch((err) => err);
  };

  return {
    getUsers,
    getUserByEmail,
    addUser,
    getUsersPosts,
    getPosts,
    addPost,
    getCategories,
  };
};
