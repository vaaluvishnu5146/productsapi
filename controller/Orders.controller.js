const OrdersRouter = require('express').Router();


// Fetches all the orders
OrdersRouter.get("/", function (request, response) {
    return response.status(200).json({
        message: "Orders fetched successfully"
    })
})

// Fetches order matches given OrderId 
OrdersRouter.get("/:orderId", function (request, response) {
    return response.status(200).json({
        message: "Order fetched successfully"
    })
})


module.exports = OrdersRouter;