//1 introduce data in JS

var dataArray = [5,11,18];

//2 add SVG element to HTML page

d3.select("body").append("svg").attr("height","100%").attr("width", "100%");

//3 set width and height with .attr("the attribute we want to change", "what we want it to be"); .attr could be in the same line or you can press enter. Identical. 

//4 add rectangles to the svg

svg.selectAll("rect") //select the rectangles, even though they haven't been added yet. It's fine. "Grab the SVG element to find some rectangles. If you find rectangles, select them.  If you don't find rectangles, empty seleciton"
    .data(dataArray)
    .enter().append("rect"); //If there are remaining datapoints beyond the number of rectangles in the SVG, d3 puts these elements are put into an "enter selection" automatically.  Here, when we say .enter