const Express = require("express");
const App = Express();
const port = 8000;

App.use("/public", Express.static("public"));

App.get('/', function(request, response) {
    response.send("Hello World!");
});

App.listen(port, function(){
        console.log("Express server is up Dan :)");
});