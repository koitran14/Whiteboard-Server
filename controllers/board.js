const Board = require('../models/board.model');
const model = new Board();

exports.getAll = async (req, res) => {
   res.status(200).json({
      message: 'This is getAll() function in Board model.',
   });
};