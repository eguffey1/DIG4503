const Express = require("express");
const App = Express();
const port = 8080;

App.get('/', function(request, response) {
    response.json({'error': "some error"});
});
App.get('/book', function(request, response) {
    response.send("Book!");
});

App.listen(port, function(){
        console.log("Server running!");
});