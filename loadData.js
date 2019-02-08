console.log("Welcome to Data Land!");
d3.text("/Data/textData.txt", function(error, data) {
    console.log("error:", error);
    console.log("text:", data);
});

d3.csv("/Data/csvData.csv", function(error, data) { 
    console.log("csv:", data);

});

d3.json("file.json", function(error, data) {
    console.log(data);
  });

console.log("END OF LINE");
