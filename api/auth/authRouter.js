const router = require("express").Router();
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const Buyers = require("../users/buyerModel.js");