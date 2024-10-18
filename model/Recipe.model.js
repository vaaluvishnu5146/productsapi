const mongoose = require("mongoose");

// Schema
const RecipeSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true,
    },
    image: {
        type: String
    }
});

module.exports = mongoose.model('recipe', RecipeSchema);