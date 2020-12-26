console.log("% Land Area 2016 South American Countries");

d3.text("/Data/textData.txt", function(error, data) {
    console.log("error:", error);
    console.log("text:", data);
});

d3.csv("/Data/worldBankPercentLandForest.csv", function(error, data) {
    data.forEach(function(d) {
        d.export = parseFloat(d.export);
    });
    console.log("csv:", data);
});

var json = "/Data/wBPL.json";
d3.json(json, function(error, data) {
    console.log("/Data/worldBankPercentLandForest.json", data);
});

console.log("END OF LINE");