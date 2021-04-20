//Creating paths with generators and groups
//takes a single attribute: d , as long as the data is formatted as a string of x y directions. 
//Generators create paths for us

//d3 offsers generators that can take data and output an area or chart element automatically.

//1 Create a dataArray containing a series of x , y values  as objects
var dataArray = [{x:5,y:5},{x:10,y:15},{x:20,y:7},{x:30,y:18},{x:40,y:10}];

//create a variable which introduces an SVG element into the html page
var svg = d3.select("body").append("svg").attr("height","100vh").attr("width","100vw");

//create a line using a d3 built-in generator.
var line = d3.line() //line generator knows it needs to output a line, and then in coming lines, we tell it what to do with the data with respect to the attributes of that line
                .x(function(d,i){ return d.x*6; }) //for each xy coordinate pair, computes a new x value
                .y(function(d,i){ return d.y*4; }) //for each xy coordinate pair, computes a new y value
                .curve(d3.curveCardinal); //built in curve type.  Others available: curveStep, curveCardinal.....[Curve Explorer: http://bl.ocks.org/d3indepth/b6d4845973089bc1012dec1674d3aff8 ] [https://github.com/d3/d3/blob/master/API.md]

//it's wise to, at least for now, put all of the generators at the top of the code so the browser knows about them (as theyare functions) before it goes forward in constructing the page.                 

//This is where we commit, then, to drawing the path that we just generated using d3.line. 
svg.append("path").attr("d",line(dataArray))
    .attr("fill","none")
    .attr("stroke","blue");

