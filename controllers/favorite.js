const Favorite = require('../models/favorite.model');

exports.checked = async (req, res) => {
    try {
        const request = await Favorite.findOne({userId: req.params.userId, boardId: req.params.boardId});
        const check = request !== null;
        return res.status(200).json({isFavorite: check})
    } catch (error) {
        return res.status(500).json({error: error.message})

    }
}

exports.setFavorite = async (req, res) => {
    try {
        const { userId, boardId } = req.params; 
        if (!userId || !boardId) {
            return res.status(400).json({ error: "userId and boardId are required" });
        }
        await Favorite.create({ userId, boardId });
        return res.status(200).json({ message: "Operation successful" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

exports.removeFavorite = async (req, res) => {
    try {
        const { userId, boardId } = req.params; 
        if (!userId || !boardId) {
            return res.status(400).json({ error: "userId and boardId are required" });
        }
        const favorite = await Favorite.deleteMany({ userId: userId, boardId: boardId });
        return res.status(200).json(favorite);
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

exports.getAllFavorites = async (req, res) => {
    try {
        const response = await Favorite.find();
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}
