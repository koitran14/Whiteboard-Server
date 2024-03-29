const Favorite = require('../models/favorite.model');

// exports.checked = async (req, res) => {
//     try {
//         const data = await Favorite.findOne({ userId: req.params.userId, boardId: req.params.boardId });
//         return res.status(200).json({
//             isFavorite: data !== null
//         });
//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// }

// exports.setFavorite = async (req, res) => {
//     try {
//         const { userId, boardId } = req.body; 
//         if (!userId || !boardId) {
//             return res.status(400).json({ error: "userId and boardId are required" });
//         }
//         // Create a new favorite
//         await Favorite.create({ userId, boardId });
//         return res.status(200).json({ message: "Operation successful" });
//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// }


exports.setFavorite = async (req,res)  => {
    try {
        const {isFavorite} = req.body;
        // const { userId, boardId } = req.body;
        const favorite = await Favorite.updateOne({ userId: req.params.userId, boardId: req.params.boardId },{isFavorite});
        return res.status(200).json(favorite);
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
}

// exports.removeFavorite = async(req,res) => {
//     try {
//         // const { userId, boardId } = req.body; 

//         // if (!userId || !boardId) {
//         //     return res.status(400).json({ error: "userId and boardId are required" });
//         // }


//         const favorite = await Favorite.deleteOne({ userId: req.params.userId, boardId: req.params.boardId });
//         return res.status(200).json(favorite);
//     } catch (error) {
//         return res.status(500).json({ error: error.message });
//     }
// }

