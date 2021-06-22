const pool = require("../../config/db");
const bcrypt = require("bcryptjs");
//const validateRegisterInput = require("../../validation/register");

module.exports = async ({ body: { username, email, password } }, res) => {
  email = email.toLowerCase();
  username = username.toLowerCase();

  // //VALIDATION
  //   const errors = validateRegisterInput({ username, email, password });
  //   if (Object.keys(errors).length !== 0) {
  //     res.status(400).send(errors);
  //   }

  pool.query("SELECT * FROM users WHERE email = ?", email, (error, results) => {
    try {
      if (results[0]) {
        throw {
          status: 409,
          type: "email",
          message: "This email is alreay taken.",
        };
      }
    } catch (err) {
      if (err.status === 409) {
        return res.status(409).json(err);
      }
    }
  });

  pool.query(
    "SELECT * FROM users WHER username = ?",
    username,
    (error, results) => {
      try {
        if (results[0]) {
          throw {
            status: 409,
            type: "username",
            message: "This username is alreay taken.",
          };
        }
      } catch (err) {
        if (err.status === 409) {
          return res.status(409).json(err);
        }
      }
    }
  );

  const password_encrypted = await bcrypt.hash(password, 10);

  const user = {
    email,
    username,
    password_encrypted,
  };

  pool.query("INSERT INTO users SET ?", user, (error, results, fields) => {
    try {
      if (error) throw error;
      res.status(201).send(`User added with ID: ${results.insertId}`);
    } catch (err) {
      res.status(400).json(err);
    }
  });
};
