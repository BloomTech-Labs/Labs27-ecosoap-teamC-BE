const router = require('express').Router();

const Buyer = require('./buyerModel.js');

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
        res.status(200).json({ buyer, message: 'you found the buyer' });
      } else {
        res
          .status(404)
          .json({ message: 'Could not find buyer with given buyer ID ' });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'failed to get buyer' });
    });
});

router.post('/:id/order', (req, res) => {
  const orderData = req.body;
  const { id } = req.params;
  orderData.buyerId = id;

  Buyer.findBuyerById(id)
    .then((buyer) => {
      if (buyer) {
        Buyer.addOrder(orderData, id).then((order) => {
          res.status(201).json({
            order,
            message: "new order is added to the Buyer's buyer list",
          });
        });
      } else {
        res
          .status(404)
          .json({ message: "could not find orders with given buyer's id" });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'failed to post new order' });
    });
});

module.exports = router;
