const express = require("express");
// const ToDo = require("./models/task.model.js");
const router = express.Router();
//connects to the controller.js file
const {
    getElements,
    getElement,
    createElement,
    editElement,
    deleteElement,
} = require('../controllers/toDo.controller.js');

//calls the function in the product controller to get all the products
router.get("/", getElements);
//calls the function in the product controller to get a single product by id
router.get("/:id", getElement);
//calls the function in the product controller to  create a product
router.post("/", createElement);
//calls the function in the product controller to edit a single product by id
router.put("/:id", editElement);
//calls the function in the product controller to delete a single product by id
router.delete("/:id", deleteElement);

module.exports = router;
