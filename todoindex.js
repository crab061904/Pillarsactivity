const express = require('express');
const mongoose = require('mongoose');
const Product=require('./models/product.model.js');
const productRoute=require("./routes/products.route.")
const app = express()
//middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))
//test
app.get('/',(req,res)=>{
 res.send("Hello from Node API hello");
});

//routes
app.use("/api/products", ProductRoute)


//get by id 
app.get('/api/product/:id',async (req,res)=>{

  try{
    const {id}=req.params;
    const product=await Product.findById(id);  
   res.status(200).json(product);
  }
  catch(error){
    res.status(500).json({message:error.message})
  }
});
//creating anew to do
app.post('/api/products',async (req,res)=>{
 try {
    const product=await Product.create(req.body);
    res.status(200).json(product);
 } catch (error) {
  res.status(500).json({message:error.message})
 }
});

//update or edit a product
app.put('/api/product/:id', async (req,res)=>{
  try {
    const {id}=req.params;
    //edits the product
   const product= await Product.findByIdAndUpdate(id,req.body);
   if(!product)
   {
    return res.status(404).json({message:"Product not found"});
   }
   //returns everything related to the id and product
  const updatedProduct= await Product.findById(id);
  res.status(200).json(updatedProduct)
  } catch (error) {
    res.status(500).json({message:error.message});
  }

})
//deletion of product
app.delete('/api/product/:id', async (req,res)=>{
  try {
    const {id}=req.params;
   const product= await Product.findByIdAndDelete(id)
   if(!product)
    {
     return res.status(404).json({message:"Product not found"});
    }
    return res.status(404).json({message:"Product deleted successfully"});
  } catch (error) {
    res.status(500).json({message:error.message});
  }

})
//edited the password and the node api
//connects to monggoose
mongoose.connect("mongodb+srv://admin:TestDB@backenddb.nlvzy.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=backendDB")
  .then(() => {
    console.log("Connected to Data base!")
    app.listen(3000, () => {
        console.log('Server is running on port 3000');
    });
})
  .catch(()=> {
    console.log("Connection Failed!");
  });


