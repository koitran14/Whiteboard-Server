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
      const board = new Board(req.body);
      const savedBoard = await board.save().then(doc => {
         console.log(doc);
         res.status(201).json(doc);
      });
   } catch (error) {
      res.status(500).json({ error: error.message })
   }
}