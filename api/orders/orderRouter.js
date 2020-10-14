const express = require('express');
// const authRequired = require('../middleware/authRequired');
const Orders = require('./orderModel');
const router = express.Router();

/**
 * @swagger
 * components:
 *  schemas:
 *    Order:
 *      type: object
 *      required:
 *        - organizationName
 *        - organizationWebsite
 *        - contactName
 *        - soapBarNum
 *        - contactPhone
 *        - contactEmail
 *        - country
 *        - beneficiariesNum
 *        - hygieneInitiative
 *      properties:
 *        organizationName:
 *          type: string
 *        organizationWebsite:
 *          type: string
 *        contactName:
 *          type: string
 *        soapBarNum:
 *          type: integer
 *        contactPhone:
 *          type: string
 *        contactEmail:
 *          type: string
 *          description: Maximum 320 characters
 *        address:
 *          type: string
 *        country:
 *          type: string
 *        beneficiariesNum:
 *          type: integer
 *        hygieneSituation:
 *          type: string
 *        hygieneInitiative:
 *          type: string
 *        comments:
 *          type: string
 *        buyerId:
 *          type: integer
 *      example:
 *        organizationName: '00uhjfrwdWAQvD8JV4x6'
 *        organizationWebsite: 'frank@example.com'
 *        name: 'Frank Martinez'
 *        avatarUrl: 'https://s3.amazonaws.com/uifaces/faces/twitter/hermanobrother/128.jpg'
 *
 * /orders:
 *  get:
 *    description: Returns a list of orders
 *    summary: Get a list of all orders
 *    security:
 *      - okta: []
 *    tags:
 *      - order
 *    responses:
 *      200:
 *        description: array of orders
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Profile'
 *              example:
 *                - organizationName: "test"
 *                  organizationWebsite: "www.testorganization.com"
 *                  contactName: "test contact"
 *                  soapBarNum: 10
 *                  contactPhone: "5555555555"
 *                  contactEmail: "contact@test.com"
 *                  address: null
 *                  country: "USA"
 *                  beneficiariesNum: 180
 *                  hygieneSituation: "Excellent"
 *                  hygieneInitiative: "distribution of soap in rural villages"
 *                  comments: "No Comment"
 *                  buyerId: null
 */



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
router.put("/:id", validateOrder, (req, res) => {
  Orders.getOrderById(req.params.id)
    .then((order) => {
      if (order) {
        Orders.editOrder(req.body, req.params.id)
          .then((update) => {
            res.status(200).json(update);
          })
          .catch((err) => {
            res.status(500).json({ error: "error updating that order", err });
          });
      } else {
        res
          .status(404)
          .json({ message: "couldn't find an order with that ID" });
      }
    })
    .catch((err) => {
      res.status(500).json({ error: "issue editing that order", err });
    });
});

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
