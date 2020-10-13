const express = require('express');

const router = express.Router();

const Buyer = require('./buyerModel.js');

router.post('/', (req, res) => {
  const buyerData = req.body;

  Buyer.addBuyer(buyerData)
    .then((buyer) => {
      res.status(200).json(buyer);
    })
    .then((error) => {
      console.log(error);
      res.status(500).json({ message: 'failed to create a new buyer' });
    });
});

router.get('/', (req, res) => {
  Buyer.findBuyer()
    .then((buyer) => {
      res.status(200).json(buyer);
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: "Buyer's data can not be found" });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Buyer.findBuyerById(id)
    .then((buyer) => {
      if (buyer) {
        res.status(200).json(buyer);
      } else {
        res.status(404).json({ message: 'buyer with ID does not exist ' });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'server failure, no buyer data' });
    });
});

router.get('/:id/orders', (req, res) => {
  const { id } = req.params;

  Buyer.findOrder(id)
    .then((buyer) => {
      if (buyer.length) {
        res
          .status(200)
          .json({ buyer, message: 'you found the order for this buyer' });
      } else {
        res
          .status(404)
          .json({ message: 'Could not find orders with given buyer ID ' });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'failed to get buyer' });
    });
});

router.post('/:id/orders', (req, res) => {
  const orderData = req.body;
  // const { id } = req.params;
  // orderData.buyerId = id;

  if (orderData) {
    Buyer.addOrder(orderData).then((order) => {
      console.log(order);
      res.status(201).json({
        orderData,
        message: "new order is added to the Buyer's buyer list",
      });
    });
  } else {
    res
      .status(404)
      .json({ message: "could not post order for given buyer's id" });
  }
});

module.exports = router;
