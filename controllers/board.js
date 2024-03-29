const Board = require('../models/board.model');

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
      const board = await Board.find({ _id: req.params.id });
      return res.status(200).json(board[0]);
   } catch (error) {
      return res.status(500).json({ error: error.message });
   }
};

exports.getByOrgId = async (req, res) => {
   try {
      const boards = await Board.find({ orgId: req.params.id });
      return res.status(200).json(boards);
   } catch (error) {
      return res.status(500).json({ error: error.message });
   }
};

exports.createBoard = async (req, res) => {
   try {
      console.log(req.body);
      const board = await Board.create(req.body);
      return res.status(200).json(board);
   } catch (error) {
      return res.status(500).json({ error: error.message })
   }
}

// exports.setFavorite = async(req, res) => {
//       try {
//          const {isFavorite} = req.body;
//          const board = await Board.updateOne({_id: req.params.id}, {isFavorite})
//          return res.status(200).json(board);
//       } catch (error) {
//          return res.status(500).json({ error: error.message })
//       }
// }

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
