const { getAll, createBoard, getByOrgId, updateBoard, deleteBoard } = require("../controllers/board")

module.exports = function(app){
    //GET
    app.get('/boards', getAll);
    app.get('/boards/:id', getByOrgId);

    //POST
    app.post('/boards', createBoard);

    //PUT
    app.put('/boards/:id', updateBoard)

    //DELETE
    app.delete('/boards/:id', deleteBoard);
}