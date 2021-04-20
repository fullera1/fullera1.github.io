//1 introduce data in JS

var dataArray = [5,11,18];

//2 add SVG element to HTML page with ___d3.select("body").append("svg")___

var svg = d3.select("body").append("svg").attr("height","100vh").attr("width","100%");

//3 set width and height with .attr("the attribute we want to change", "what we want it to be"); .attr could be in the same line or you can press enter. Identical. 
//4 Make a variable called svg by introducing ___var svg =___  .... at the beginning of the line with d3.select("body").append.....


//5 add rectangles to the svg

svg.selectAll("rect") //select the rectangles, even though they haven't been added yet. It's fine. "Grab the SVG element to find some rectangles. If you find rectangles, select them.  If you don't find rectangles, empty seleciton"
    .data(dataArray)
    .enter().append("rect")    //If there are remaining datapoints beyond the number of rectangles in the SVG, d3 puts these elements are put into an "enter selection" automatically.  Here, when we say .enter
    //adds an item for each item in the enter selection (which was 3 points in the data array)
    //at this point, checking Firefox (DOM) should show that there are three rectangles in the SVG.  They aren't drawn yet because it knows the "concept" of rectangle but doesn't know the minimum information required to draw it, yet. 
    //6 Add mandatory attributes to the rectangles: __attr("","")___ for each attribute: height, width, x, y. 
    .attr("height",function(d,i){ return 15*d; }) //10 We want the height to depend on the magnitude of the data point.We replace "200px" with _function(d,i){return ; }_ where we return 15 * the datapoint's value (d).  Th reason we multiply by 15 is to dramatize / scale it up to be more visible.
    .attr("width", "50px")
    .attr("x",function(d,i){ return 60*i; }) //7 we want bars 2 and 3 to appear further to the right. We'll do this by setting the "x" value to something dynamic rather than fixing it at some numerical coordinate. To make it dynamic, set _.attr("x","function(){}")__.  This replacement was made into  the code above over _.attr("x","20")__
    //8 d = data point; i = index.  runs 3 times. 1: d=5, i=0.  2: d=11, i=1.  3: d=18, i = 2. 
    //9 we set the return to 60*i to space them out by 60 pixels on center.
    .attr("y",function(d,i){ return 300-15*d; }); //to get X axis at position 300 and make it so the bars are slid down so we aren't looking at them upside down, set "y" to dynamic: 300-d*15

//See shapeAttributes.html for key attributes. 


//11 Create a variable so that we can get a consistent gap between the circles we make in 10, below
var newX = 300;

//10 Adding a circle for each datapoint, copied and pasted above lines below, replacing "rect" with _"circle"_

svg.selectAll("circle.first")
        .data(dataArray)
        .enter().append("circle")
            .attr("cx", function(d,i){ newX+=(d*6)+(i*20); return newX; }) //dynamic. Created var newX, which we update per shpae to space out each. 
            .attr("cy","100") // want this to be on a static horizontal line
            .attr("r",function(d,i){ return d*3;}) //dynamic to represent size of data
            .attr("class","first"); //added the class here and to "svg.selectAll("circle.FIRST")" per step 13


var newX = 600;

        //12 Adding Ellipses
        //to help the computer understand that we want NEW circles in addition to the ones we just made, because the enter selection is now empty, we'll use classes
        //13 add _.first to "circle" in the first setof circles to apply a class to it, and add a class attribute for that set of circles in higher code. 
        
svg.selectAll("circle.second")
        .data(dataArray)
        .enter().append("circle")
            .attr("cx", function(d,i){ newX+=(d*6)+(i*20); return newX; }) //dynamic. Created var newX, which we update per shpae to space out each. 
            .attr("cy","100") // want this to be on a static horizontal line
            .attr("r",function(d,i){ return d*3;}) //dynamic to represent size of data
            .attr("class", "second");

//14 Creating lines left off at 3: Drawing lines in linkedin learning
//ommitted

//.append versus .selectAll: append adds new SVG elements* while selectALL thinks about what elements are already assigned to datapoints. 
//15 inserting text through textArray
var textArray = ['firsttext','secondtext','thirdtext'];
svg.append("text").selectAll("tspan")
    .data(textArray)
    .enter().append("tspan")
//svg.append("text")
    .attr("font-size", "30")
    .attr("x","20px")
    .attr("y",function(d,i){ return 150 + (i*30); })
    .attr("stroke-width","2")
    .attr("dominant-baseline","middle")
    .attr("text-anchor", "start")
    .text("text", function(d){ return d; });

//deleting these two text element appends because we're instead going with the route of text array
//svg.append("text")
    //.text("text2")
    //.attr("font-size", "30")
    //.attr("x","20px")
    //.attr("y","60px");

//svg.append("text")
    //.text("text3")
    //.attr("font-size", "30")
    //.attr("x","20px")
    //.attr("y","90px");

//Creating paths with generators and groups
//takes a single attribute: d , as long as the data is formatted as a string of x y directions. 
//Generators create paths for us

//d3 offsers generators that can take data and output an area or chart element automatically.

//now go to interpolate.js for work with paths and generators.