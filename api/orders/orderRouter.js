const express = require('express');
// const authRequired = require('../middleware/authRequired');
const Orders = require('./orderModel');
const router = express.Router();

// GET all orders
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

// GET specific order by id
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

// POST order
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

// DELETE order by id
router.delete("/:id", (req,res) =>{
  Orders.deleteOrder(req.params.id)
    .then((order) => {
      if (order) {
        res.status(200).json({ deleted: order });
      } else {
        res
          .status(404)
          .json({ message: "Couldn't find an order with that ID" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "error deleting that order", err });
    });
})

// EDIT order by id


// -----------------  custom middleware   ----------------------------

function validateOrder(req, res, next){
  const order = req.body;

  if(order){
    if(order.contactEmail && order.contactEmail.length < 321){
      if(order.organizationName && order.organizationWebsite && order.contactName && order.soapBarNum && order.contactPhone && order.country && order.beneficiariesNum && order.hygieneInitiative){
        next()
      }else{
        res.status(404).json({ message: 'Please provide required information' });
      }
    }else{
      res.status(404).json({ message: 'Email is required and max 320 characters' });
    }
  }else {
    res.status(404).json({ message: 'Order missing' });
  }
}

module.exports = router;
