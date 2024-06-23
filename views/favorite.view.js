const { checked, setFavorite, removeFavorite, getAllFavorites } = require("../controllers/favorite")

module.exports = function(app){
    
    app.get('/favorites/check/:userId/:boardId', checked);
    app.get('/favorites', getAllFavorites);

    app.post('/favorites/:userId/:boardId', setFavorite);

    app.delete('/favorites/remove/:userId/:boardId', removeFavorite);
}
