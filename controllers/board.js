const Board = require('../models/board.model');

exports.getAll = async (req, res) => {
   try {
      const boards = await Board.find();
      return res.status(200).json(boards);
   } catch (error) {
      return res.status(500).json({ error: error.message });
   }
};

exports.getByOrgId = async (req, res) => {
   try {
      const boards = await Board.find({ orgId: req.params.id });
      console.log(req.params.id);
      console.log(boards);
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