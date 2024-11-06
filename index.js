const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/task.model.js");
const productRoute = require("./routes/todo.route.js");
const app = express();
//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//test
app.get("/", (req, res) => {
  res.send("Hello from Node API hello");
});

//routes
app.use("/api/todos", productRoute);

//edited the password and the node api
//connects to monggoose
mongoose
  .connect(
    "mongodb+srv://admin:TestDB@backenddb.nlvzy.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=backendDB"
  )
  .then(() => {
    console.log("Connected to Data base!");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection Failed!");
  });
