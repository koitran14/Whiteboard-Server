const { getAll, createBoard, getByOrgId, updateBoard, deleteBoard, getById, renameBoard } = require("../controllers/board")

module.exports = function(app){
    //GET
    app.get('/boards', getAll);
    app.get('/boards/:userId/:orgId', getByOrgId);
    app.get('/boards/:boardId', getById);

    //POST
    app.post('/boards', createBoard);

    //PUT   
    app.put('/boards/:id', updateBoard)
    app.put('/boards/title/:id', renameBoard)

    //DELETE
    app.delete('/boards/:id', deleteBoard);
}

