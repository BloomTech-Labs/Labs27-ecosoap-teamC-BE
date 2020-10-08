const express = require('express');
const authRequired = require('../middleware/authRequired');
const Orders = require('./orderModel');
const router = express.Router();

router.get('/', function (req, res) {
  Orders.getAllOrders()
    .then((orders) => {
      res.status(200).json(orders);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: err.message });
    });
});

router.get('/:id', function (req, res) {
  const id = String(req.params.id);
  Orders.getOrderById(id)
    .then((order) => {
      if (order) {
        res.status(200).json(order);
      } else {
        res.status(404).json({ error: 'OrderNotFound' });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});
