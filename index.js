const Express = require("express");
const products = require("./products.json");
const OrdersController = require("./controller/Orders.controller");
const ProductsController = require("./controller/Products.controller");
const RecipesController = require("./controller/Recipes.controller");
const {createDbConnection} = require('./db');

// CREATE DB CONNECTION
createDbConnection();

// ENVIRONMENT VARIABLES CONFIG
require('dotenv').config();

// STEP 1: Create a API SERVER
const API_SERVER = Express();

// PARSING INCOMING REQUEST BODY AS JSON
API_SERVER.use(Express.json());

// SERVING STATIC FILES
API_SERVER.use(Express.static('public'));


// INJECT ROUTERS
API_SERVER.use("/orders", OrdersController)
API_SERVER.use("/products", ProductsController)
API_SERVER.use("/recipes", RecipesController)

// ROUTE 1: /
API_SERVER.get("/", function (request, response) {
   // return response.send("/ - Request received")
   return response.status(200).json({
    message: "Hello Folks",
    success: true
   });
});

// ROUTE 1: /
API_SERVER.get("/", function (request, response) {
    // return response.send("/ - Request received")
    return response.status(200).json({
     message: "Hello Folks",
     success: true
    });
 });

// ROUTE 2: 
// PATH = /products
// METHOD = GET
API_SERVER.get("/products", function (request, response) {
    let result = [];
    const { limit, page } = request.query;
    if(limit && page) {
        const start = Number(limit) * (Number(page) - 1) ;
        const end = Number(limit) * Number(page);
        result = products.data.slice(start, end);
    } else {
        result = products.data;
    }
    // return response.send("/ - Request received")
    return response.status(200).json({
     message: "Products fetched successfully",
     success: true,
     data: result
    });
 });

// ROUTE 2: 
// PATH = /products/{productId}
// METHOD = GET
API_SERVER.get("/products/:productId", function (request, response) {
    // return response.send("/ - Request received"))
    const matchedProduct = products.data.find((_product) => _product.id === Number(request.params.productId));
    if (!matchedProduct) {
        return response.status(404).json({
            message: "No products found",
            success: false
           });    
    } else {
        return response.status(200).json({
            message: "Product fetched successfully",
            success: true,
            data: matchedProduct
           });
    }
 });


// ROUTE 4:
// PATH = /products
// METHOD = POST
API_SERVER.post("/products/create", function (request, response) {
    console.log("HERE", request.body);
    return response.json({
        message: "Product created successfully!",
        success: true
    });
});



// STEP 2: START AND LISTEN INCOMING REQUEST TO THIS SERVER
API_SERVER.listen(process.env.PORT, process.env.HOSTNAME, function () {
    console.log("Server started");
    console.log(`http://${process.env.HOSTNAME}:${process.env.PORT}`)
});