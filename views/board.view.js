const { getAll, createBoard } = require("../controllers/board")

module.exports = function(app){
    app.get('/boards', getAll);
    app.post('/boards', createBoard);
}