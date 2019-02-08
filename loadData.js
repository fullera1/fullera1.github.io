console.log("Welcome to Data Land!");
d3.text("data/textData.txt", function(error, data) {
    console.log("error:", error);
    console.log("text:", data);
)});
