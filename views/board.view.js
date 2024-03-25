const { getAll, createBoard, getByOrgId, updateBoard, deleteBoard, setFavorite, getById, renameBoard } = require("../controllers/board")

module.exports = function(app){
    //GET
    app.get('/boards', getAll);
    app.get('/boards/:id', getByOrgId);
    app.get('/boards/id/:id', getById);

    //POST
    app.post('/boards', createBoard);

    //PUT   
    app.put('/boards/:id', updateBoard)
    app.put('/boards/favorite/:id', setFavorite);
    app.put('/boards/title/:id', renameBoard)

    //DELETE
    app.delete('/boards/:id', deleteBoard);
}