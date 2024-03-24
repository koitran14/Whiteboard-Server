const Favorite  = require('../models/favorite.model');

// exports.getAll = async (req, res) => {
//     try {
//         const allfavorites = await Favorite.find();
//         return res.status(200).json(allfavorites);
//     } catch (error){
//         return res.status(500).json({ error: error.message});
//     }
// };


exports.checked = async(req, res) => {
    try {
        const data = await Favorite.findOne({ userId: req.params.userId, boardId: req.params.boardId });
        return res.status(200).json({
            isFavorite: data !== undefined
        });
    } catch (error) {
        return res.status(500).json({ error: error.message});
    }
};

exports.setFavorite = async(userId, boardId, res) => {
    try {
        if(checked(userId, boardId) === true){
            insert(userId, boardId);
        } else {
            remove(userId,boardId);
        }
    } catch (error){
        return res.status(500).json({error: error.message});
    }
};

const insert = async(userId, boardId, res)=> {
    try {
        const favorite = await Favorite.create({userId},{boardId});
        return res.status(200).json(favorite);
    }
    catch (error) {
        return res.status(500).json({error: error.message});
    }
};

const remove = async(userId, boardId, res) => {
    try{
        //delete({userId: userId,  filter2,...}, {data}, {option})
        const favorite = await Favorite.deleteOne({"userId":userId, "boardId":boardId});
        return res.status(200).json(favorite);
    } catch(error) {
        return res.status(500).json({error: error.message});
    }
};
