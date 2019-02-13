console.log("Welcome to Data Land!");

d3.text("data/textData.txt", function(error, data) {
    console.log("error:", error);
    console.log("text:", data);
});

d3.csv("data/csvData.csv", function(error, data) {
    data.forEach(function(d) {
        d.export = parseFloat(d.export);
    });
    console.log("csv:", data);
});

d3.json("data/jsData.json", function(error, data) {
    console.log("error:", error);
    console.log("json:", data);
});

var url = "https://saguaro.datausa.io/api/data?drilldowns=Place&measures=Population&year=all";
d3.json(url, function(error, data) {
    console.log("Data USA", data);
});

console.log("END OF LINE");