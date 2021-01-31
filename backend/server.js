var func = require("./data-retrieval");

var express = require("express"),
    app = express(),
    bodyParser = require("body-parser");


app.use(bodyParser.urlencoded({ extended: true }));

app.get("/update-data", function (req, res) {
    func.getCovidCases();
    func.getKeywordFrequencyByState();
    res.send("data updated.")
})


app.listen(5000, function () {
    console.log("Server started running.");
});