const ProductsRouter = require('express').Router();


// Fetches all the Products
ProductsRouter.get("/", function (request, response) {
    return response.status(200).json({
        message: "Products fetched successfully"
    })
})

// Fetches order matches given OrderId 
ProductsRouter.get("/:productId", function (request, response) {
    return response.status(200).json({
        message: "Product fetched successfully"
    })
})


module.exports = ProductsRouter;