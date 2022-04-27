const proxy = require('http-proxy-middleware');
module.exports = function(app){
    app.use(proxy('/wishlist' , {target : 'http://localhost:3001'}));
    app.use(proxy('/savings' , {target : 'http://localhost:3005'}));
}