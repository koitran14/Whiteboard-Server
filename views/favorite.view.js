const { checked, setFavorite } = require("../controllers/favorite");

module.exports = function(app){
    // GET all favorites
    app.get('/favorites', getAll);

    // GET favorite by user ID
    app.get('/favorites/user/:userId', getById);

    // GET favorite by board ID
    app.get('/favorites/board/:boardId', getByBoardId);

    // GET check if a favorite exists for a specific user and board
    app.get('/favorites/check/:userId/:boardId', checked);

    // POST set favorite
    app.post('/favorites', setFavorite);
};
