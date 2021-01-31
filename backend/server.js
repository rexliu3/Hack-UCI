var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/search-frequency-data", function (req, res) {
    res.send("hello")
})


app.listen(5000, function () {
    console.log("Server started running.");
});