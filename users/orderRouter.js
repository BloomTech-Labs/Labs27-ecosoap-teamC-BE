const router = require('express').Router();
const bcryptjs = require('bcryptjs');

const Order = require('./orderModel.js');

router.get('/', (req, res) => {
  Order.findOrder()
    .then((orders) => {
      res.status(200).json(orders);
    })
    .catch((error) => {
      console.log(error);
      res, status(500).json({ message: 'Orders data can not be found' });
    });
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  Order.findOrderById(id)
    .then((orders) => {
      if (order) {
        res.status(200).json(order);
      } else {
        res.status(404).json({ message: 'Order with ID does not exist ' });
      }
    })
    .catch((error) => {
      console.log(error);
      res.status(500).json({ message: 'server failure, no order data' });
    });
});

router.post('/', (req, res) => {
  const postOrder = req.body;

  Order.addOrder(postOrder)
    .then((order) => {
      res.status(200).json(order);
    })
    .then((error) => {
      res.status(500).json({ message: 'failed to create a new order' });
    });
});

router.put('/:id', (req, res) => {
  const { id } = req.params;
  const changes = req.body;

  Order.findOrderById(id)
    .then((order) => {
      if (order) {
        orders.update(changes, id).then((updateOrder) => {
          res.status(200).json({ message: 'order updated', id });
        });
      } else {
        res.status(404).json({ message: 'order with id can not be found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: 'order info can not be updated' });
    });
});

router.delete('/:id', (req, res) => {
  const { id } = req.params;

  Order.deleteOrder(id)
    .then((order) => {
      if (order) {
        res.json({ removed: order, id });
      } else {
        res.status(404).json({ message: 'order with id could not be found' });
      }
    })
    .catch((error) => {
      res.status(500).json({ message: 'failed to delete the order' });
    });
});

module.exports = router;
