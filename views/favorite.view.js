const { checked, setFavorite, removeFavorite } = require("../controllers/favorite")

module.exports = function(app){
    
    app.get('/favorites/check/:userId/:boardId', checked);

    app.post('/favorites/:userId/:boardId', setFavorite);

    app.delete('/favorites/remove/:userId/:boardId', removeFavorite);
}
