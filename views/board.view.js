const { getAll, createBoard, getByOrgId } = require("../controllers/board")

module.exports = function(app){
    app.get('/boards', getAll);
    app.get('/boards/:id', getByOrgId);
    app.post('/boards', createBoard);
}