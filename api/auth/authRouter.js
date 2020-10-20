const router = require('express').Router();
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const Buyers = require('../users/buyerModel.js');
const Admins = require('../admin/adminModel.js');

// ----------- admin endpoints --------------------

// Admin Login
router.post('/admin/login', (req, res) => {
  const { email, password } = req.body;

  if (isValid(req.body)) {
    Admins.findByAdmin({ email }).then(([user]) => {
      if (user && bcryptjs.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          message: `Welcome ${email}`,
          token,
          admin_id: user.id,
          email: user.email,
          admin: true,
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    });
  } else {
    res.status(400).json({
      message: 'Please provide email and password',
    });
  }
});

//  Admin Register
router.post('/admin/register', (req, res) => {
  const credentials = req.body;

  if (isValid(credentials)) {
    const hash = bcryptjs.hashSync(credentials.password, 8);
    credentials.password = hash;

    Admins.addAdmin(credentials)
      .then((user) => {
        const token = generateToken(user);
        res.status(201).json({
          data: user,
          token,
          admin_id: user.id,
          email: user.email,
          admin: true,
        });
      })
      .catch((err) => {
        res.status(500).json({ err: err.message });
      });
  } else {
    res.status(400).json({
      message: 'Please provide email and password',
    });
  }
});

// ----------- buyer endpoints -----------------

// Buyer Login
router.post('/buyer/login', (req, res) => {
  const { email, password } = req.body;

  if (isValid(req.body)) {
    Buyers.findBy({ email }).then(([user]) => {
      if (user && bcryptjs.compareSync(password, user.password)) {
        const token = generateToken(user);

        res.status(200).json({
          message: `Welcome ${email}`,
          token,
          buyer_id: user.id,
          email: user.email,
          admin: false,
        });
      } else {
        res.status(401).json({ message: 'Invalid Credentials' });
      }
    });
  } else {
    res.status(400).json({
      message: 'Please provide email and password',
    });
  }
});

//  Buyer Register
router.post('/buyer/register', (req, res) => {
  const credentials = req.body;

  if (isValid(credentials)) {
    const hash = bcryptjs.hashSync(credentials.password, 8);
    credentials.password = hash;

    Buyers.addBuyer(credentials)
      .then((user) => {
        const token = generateToken(user);
        res.status(201).json({
          data: user,
          token,
          buyer_id: user.id,
          email: user.email,
        });
      })
      .catch((err) => {
        res.status(500).json({ err: err.message });
      });
  } else {
    res.status(400).json({
      message: 'Please provide email and password',
    });
  }
});

function generateToken(user) {
  const payload = {
    subject: user.id,
    email: user.email,
  };
  const secret = process.env.JWT_secret || 'supersecret';
  const options = {
    expiresIn: '1d',
  };
  return jwt.sign(payload, secret, options);
}

function isValid(user) {
  return Boolean(user.email && user.password);
}

module.exports = router;
