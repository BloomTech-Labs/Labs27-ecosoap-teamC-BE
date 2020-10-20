const router = require("express").Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Buyers = require("../users/buyerModel.js");

router.post("/login", (req, res) => {
    const { username, password } = req.body;
  
    if (isValid(req.body)) {
        Buyers.findBy({ username }).then(([user]) => {
        if (user && bcryptjs.compareSync(password, user.password)) {
          const token = generateToken(user);
  
          res
            .status(200)
            .json({
              message: `Welcome ${username}`,
              token,
              user_id: user.id,
              username: user.username,
            });
        } else {
          res.status(401).json({ message: "Invalid Credentials" });
        }
      });
    } else {
      res.status(400).json({
        message: "Please provide username and password",
      });
    }
  });



  
  module.exports = router;