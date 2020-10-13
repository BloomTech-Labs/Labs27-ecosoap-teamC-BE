const express = require('express');
// const authRequired = require('../middleware/authRequired');
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

router.post('/', validateOrder, (req, res) => {
  const order = req.body;
  
    Orders.createOrder(order)
      .then((newOrder) => {
        res.status(200).json(newOrder);
      })
      .catch((err) => {
        res.status(500).json({ error: 'Error creating that order', err });
      });
  
});

// -----------------  custom middleware   ----------------------------

function validateOrder(req, res, next){
  const order = req.body;
  if(order){
    if(order.email && order.email.length < 321){
      console.log('valid email!')
    }
  }else {
    res.status(404).json({ message: 'Order missing' });
  }
}

module.exports = router;
