const RecipeModel = require('../model/Recipe.model');

const RecipesRouter = require('express').Router();


// Fetches all the Recipes
RecipesRouter.get("/", async function (request, response) {
    try {
       const results = await RecipeModel.find();
       return response.status(200).json({
        message: "Recipes fetched successfully",
        data: results
       })
    } catch(e) {
        return response.status(500).json({
            message: "something went wrong",
            error: error.message
        })
    }
})

// Fetches order matches given OrderId 
RecipesRouter.get("/:recipeId", function (request, response) {
    return response.status(200).json({
        message: "Recipe fetched successfully"
    })
})

// Create a Recipe
RecipesRouter.post("/createRecipe", async function (request, response) {
    try {
        const result = await RecipeModel.create(request.body);
        return response.status(200).json({
            message: "Recipe created successfully",
            result
        })
    } catch (error) {
        return response.status(400).json({
            message: "Data is missing",
            error: error.message
        });
    }
})

module.exports = RecipesRouter;