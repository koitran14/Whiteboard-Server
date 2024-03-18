const Board = require('../models/board.model');

exports.getAll = async (req, res) => {
   try {
      const boards = await Board.find();
      res.status(200).json(boards);
   } catch (error) {
      res.status(500).json({ error: error.message });
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