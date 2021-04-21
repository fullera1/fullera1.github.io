//Creating paths with generators and groups
//takes a single attribute: d , as long as the data is formatted as a string of x y directions. 
//Generators create paths for us

//d3 offsers generators that can take data and output an area or chart element automatically.

//1 Create a dataArray containing a series of x , y values  as objects
var dataArray = [{x:5,y:5},{x:10,y:15},{x:20,y:7},{x:30,y:18},{x:40,y:10}];
//18 Create a new array to hold the interpolation types
var interpolateTypes = [d3.curveLinear, d3.curveNatural, d3.curveStep, d3.curveBasis, d3.curveBundle, d3.curveCardinal];
//19 Now introduce loop. see step 20 below.
//2 create a variable which introduces an SVG element into the html page
var svg = d3.select("body").append("svg").attr("height","100vh").attr("width","100vw");


//20 Introducing loop 

for (var p=0; p<6; p++) {//21 establishes loop. For iterations 0 through 6, increment p each time by one (as a count of iteration) and then do the following:
//3 create a line using a d3 built-in generator.
var line = d3.line() //4 line generator knows it needs to output a line, and then in coming lines, we tell it what to do with the data with respect to the attributes of that line
                .x(function(d,i){ return d.x*6; }) //5 for each xy coordinate pair, computes a new x value
                .y(function(d,i){ return d.y*4; }) //6 for each xy coordinate pair, computes a new y value
                .curve(interpolateTypes[p]); //7 built in curve type.  Others available: curveStep, curveCardinal.....[Curve Explorer: http://bl.ocks.org/d3indepth/b6d4845973089bc1012dec1674d3aff8 ] [https://github.com/d3/d3/blob/master/API.md]
                //24, replaced d3.curveCardinal with interpolateTypes[p] to cause it to go through the array of interpolation types we established above.


//8 it's wise to, at least for now, put all of the generators at the top of the code so the browser knows about them (as theyare functions) before it goes forward in constructing the page.                 


//23 Define variables that will shift each chart
var shiftX = p*250;
var shiftY = 0; 
//23b now go update the translate(x,y) values to include this
//15 We declare a variable which will represent the group. 
var chartGroup = svg.append("g").attr("class","group"+p).attr("transform","translate("+shiftX+",0)"); //translate initial setting (0,0)
//26 added .attr("class","group"+p) to give the group(iterated) class names. Now, go to style.css and add: __ g.group0 path, [ETR] g.group0 circle { [ETR] stroke: red; [ETR] fill: none;} __
//16 Now that we've created a group, replace "svg.append....." and "svg.selectAll....." bellow with chartGroup.append.... etc. 

//9 This is where we commit, then, to drawing the path that we just generated using d3.line. 
chartGroup.append("path").attr("d",line(dataArray)) //per step 16, replaced "svg" with "chartGroup"
    .attr("fill","none")
    .attr("stroke","blue");

chartGroup.selectAll("circle.grp"+p) //per step 16, replaced "svg" with "chartGroup" || 22 reference updated group designation that was applied in step 21
    .data(dataArray)
    .enter().append("circle")
                .attr("class", function(d,i){ return "grp"+i;})//21 add class that is dynamic so that a new set of circles gets drawn each time during the loop.
                .attr("cx",function(d,i){ return d.x*6; })//12 dynamic. Want them to be the same as the line is receiving, so C/P above.
                .attr("cy",function(d,i){ return d.y*4; }) //13 dynamic.  Want them to be the same setting as what the line is receiving, so copied/pasted from above.
                .attr("r","2"); //14 tiny circles
            }; //ends loop
//14 Now we want to move the path and circles into a group so that we can make multiples of this and translate each one to the right.
//17 Now that we have established chartGroup, create new array which will hold the different interpolation types. See 18 at top.

//10 At this point, we will introduce groups to generate five charts with the same data points, but different interpolation methods.
//11 First we'lll add dots.

//25 New applying group-based styling: first add class name to group (26) didn't finish this part properly but it's fine