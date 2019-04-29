////////////////////// Requires //////////////////////
var express = require("express");
var app = express();
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);
////////////////////// PORT Connection //////////////////////
var PORT = process.env.PORT || 8080;
////////////////////// Middleware //////////////////////
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
///////////// Start Server Listening //////////////////////

app.listen(PORT, function() {
    console.log("App listening on PORT:" + PORT);
})