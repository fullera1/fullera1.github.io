console.log("Forest area from 1990 SA");

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

var json = "/hw/SAforestarea.json";
d3.json(json, function(error, data) {
    console.log("SAforestarea.json", data);
});

console.log("END OF LINE");