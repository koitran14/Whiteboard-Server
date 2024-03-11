const { getAll } = require("../controllers/board")

module.exports = function(app){
    app.get('/board', getAll);
}