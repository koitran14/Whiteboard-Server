const mongoose = require("mongoose");

const board = mongoose.Schema({

    title: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    // participants: {
    //     type: User[],
    //     require: true,
    // }
})

module.exports = mongoose.model("Board", board);