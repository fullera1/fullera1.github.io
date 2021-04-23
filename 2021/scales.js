//D3 Scales 
//domains (inputs) + ranges (outputs)
//domains can accept negative values 
//scale works out the right multiplier  for data : pixels
//requires min and max of data, and min and max of pixels / where to draw.
//min value of domain gets matched to max value of range due to drawing direction of browser

//d3 scales can be continuous, ordinal, quantized, or sequential. We want continuous (common)

var dataArray = [25,26,28,32,37,45,55,70,90,120,135,150,160,168,172,177,180];
var dataYears = ['2000','2001','2002','2003','2004','2005','2006','2007','2008','2009','2010','2011','2012','2013','2014','2015','2016'];

var heighty = 200;
var width = 500; 

var margin = {left:50,right:50,top:40,bottom:0}; //introduced margin

//before the area generator, introduce linear scale as variable with this structure: __var y = d3.scaleLinear().domain().range();__
var y = d3.scaleLinear()
            .domain([0,180])//take an array: min, max
            .range([heighty,0]);//takes an array: min, max but we'll swap them due to browser drawing direction

//define the axis generator 
var yAxis = d3.axisLeft(y);

//create group element then call the axis on that group.  Add that group onto the svg...


var area = d3.area()
                .x(function(d,i){ return i*20; })
                .y0(heighty)
                .y1(function(d){ return heighty - d;; }); 

var svg = d3.select("body").append("svg").attr("height","400").attr("width","400");

//grouping the chart with the axis
var chartGroup = svg.append("g").attr("transform","translate("+margin.left+","+margin.top+")");


chartGroup.append("path").attr("d",area(dataArray));//append Path to chartGroup, not "svg", because the group has the translation applied to it
svg.append("g").attr("class","axis y").call(yAxis).attr("transform","translate("+margin.left+","+margin.top+")"); //created group element and called axis on this group. 
//then introduce _.attr("transform","translate(50,40)")_

//but we want our axis to line up with the chart 
//so we introduce a margin
//apply it to the group
//and then apply it to the area chart.  

//so we create a group and put the chart and the axis inside it, then apply that translation to the group housing them all.
