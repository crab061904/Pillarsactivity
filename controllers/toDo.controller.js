const Todo = require("../models/task.model.js");

//get all products
const getElements = async (req, res) => {
  try {
    const list = await Todo.find({});
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//get a single product
const getElement = async (req, res) => {
  try {
    const { id } = req.params;
    const list = await Todo.findById(id);
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const createElement = async (req, res) => {
  try {
    const list = await Todo.create(req.body);
    res.status(200).json(list);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//edit the product by id
const editElement = async (req, res) => {
  try {
    const { id } = req.params;
    //edits the product
    const listElement = await Todo.findByIdAndUpdate(id, req.body);
    if (!listElement) {
      return res.status(404).json({ message: "task not found" });
    }
    //returns everything related to the id and product
    const updatedElement = await Todo.findById(id);
    res.status(200).json(updatedElement);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
//delete the product by id
const deleteElement = async (req, res) => {
  try {
    const { id } = req.params;
    const listElement = await Todo.findByIdAndDelete(id);
    if (!listElement) {
      return res.status(404).json({ message: "task not found" });
    }
    return res.status(404).json({ message: "task deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getElements,
  getElement,
  createElement,
  editElement,
  deleteElement,
};
