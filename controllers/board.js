const Board = require('../models/board.model');
const Favorite = require('../models/favorite.model');

exports.getAll = async (req, res) => {
   try {
      const boards = await Board.find();
      return res.status(200).json(boards);
   } catch (error) {
      return res.status(500).json({ error: error.message });
   }
};

exports.getById = async (req, res) => {
   try {
      const board = await Board.findOne({_id: req.params.boardId});
      return res.status(200).json(board)
   } catch (error) {
      return res.status(500).json({ error: error.message });
   }
};

exports.getByOrgId = async (req, res) => {
   try {
      const boards = await Board.find({ orgId: req.params.orgId });
      const favoriteBoards = await Promise.all(boards.map(async (board) => {
         const check = await Favorite.findOne({ userId: req.params.userId, boardId: board._id });
         const isFavorite = check !== null 
         return { ...board.toObject(), isFavorite }; // toObject() is used to convert Mongoose document to plain JavaScript object
      }));
      return res.status(200).json(favoriteBoards);
   } catch (error) {
      return res.status(500).json({ error: error.message });
   }
};


exports.createBoard = async (req, res) => {
   try {
      const board = await Board.create(req.body);
      return res.status(200).json(board);
   } catch (error) {
      return res.status(500).json({ error: error.message })
   }
}

exports.updateBoard = async (req, res) => {
   try {
      const board = await Board.updateOne({ _id:req.params.id }, req.body);
      return res.status(200).json(board);
   } catch (error) {
      return res.status(500).json({ error: error.message })
   }
}

exports.renameBoard = async(req, res) => {
   try {
      const { title } = req.body;
      const board = await Board.updateOne({_id: req.params.id}, { title })
      return res.status(200).json(board);
   } catch (error) {
      return res.status(500).json({ error: error.message })
   }
}

exports.deleteBoard = async (req, res) => {
   try {
      const board = await Board.deleteOne({ _id:req.params.id });
      return res.status(200).json(board);
   } catch (error) {
      return res.status(500).json({ error: error.message })
   }
}
