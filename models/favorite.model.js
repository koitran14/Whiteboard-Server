const mongoose = require("mongoose");

const favoriteSchema = mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    boardId: {
        type: String,
        required: true,
    },
    isFavorite: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model("Favorite", favoriteSchema);