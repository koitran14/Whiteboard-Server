const mongoose = require("mongoose");

const boardSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    orgId: {
        type: String,
        required: true,
    },
    authorId: {
        type: String,
        required: true,
    },
    imageUrl: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: new Date(),
    },
    // isFavorite: {
    //     type: Boolean,
    //     default: false
    // }
})

module.exports = mongoose.model("Board", boardSchema);