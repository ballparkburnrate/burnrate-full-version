/*********************************
*   Start of Liquid Fill Gauges  *
******************************** */

// Start of Gauge CSS and Animation Code (Edit Here to change colors and animation settings)
d3.select("#fillgauge1").call(d3.liquidfillgauge, 55);

d3.select("#fillgauge4").call(d3.liquidfillgauge, 50, {
  circleColor: "#9ED2DB",
  textColor: "#9ED2DB",
  waveTextColor: "#9ED2DB",
  waveColor: "#9ED2DB",
  textVertPosition: 0.8,
  waveAnimateTime: 1000,
  waveHeight: 0.05,
  waveAnimate: true,
  waveRise: false,
  waveOffset: 0.25,
  textSize: 0.75,
  waveCount: 3
});
d3.select("#fillgauge5").call(d3.liquidfillgauge, 60.44, {
  circleThickness: 0.15,
  circleColor: "#FF7777",
  textColor: "#FF4444",
  waveTextColor: "#FFAAAA",
  waveColor: "#FFDDDD",
  textVertPosition: 0.8,
  waveAnimateTime: 1000,
  waveHeight: 0.05,
  waveAnimate: true,
  waveRise: false,
  waveOffset: 0.25,
  textSize: 0.75,
  waveCount: 3
});

/*********************************
*  Start of Morris Donut Chart   *
******************************** */

Morris.Donut({
    element: 'donut-chart',
    // Array that holds info for values and categories
    data: [
      {label: "Employees", value: 30},
      {label: "Rent", value: 50},
      {label: "Gas", value: 35},
      {label: "Miscellaneous", value: 45}
    ],
    // Change Color or inside Text
    labelColor: '#fff',
    // Change Colors of each Bar
    colors: [
      '#9ED2DB',
      '#ADADAD',
      '#A3DCE6',
      '#ADADAD'
      ]
  });
/*********************************
*  Start of Area Graph   *
******************************** */
var YourList ={
  1:["Jan",20],
  2:["Feb",15],
  3:["Mar",10],
};

var myJSON = [];
$.each(YourList, function (i, item) {

    var jsonArray = { month: YourList[i][0] , value: YourList[i][1] };
    var temp = jsonArray;
    myJSON.push(temp);

});
console.log(myJSON);
var bar_chart = Morris.Area({
  element: 'line',
  xLabelMargin: 10,
  xLabelAngle: 45,
  LabelMargin: 10,
  parseTime: false,
  data: myJSON,
  xkey: 'month',
  ykeys: ['value'],
  labels: ['Cash Remaining '],
  lineColors: [
    '#9ED2DB',
    ],
  pointFillColors: ["#9ED2DB"],
  pointStrokeColors: ["#9ED2DB"],
  yLabelFormat:function (y) { return "$" + y.toString(); },
});

/*********************************
*  Modals  *
******************************** */

$(document).ready(function(){
  $('.modal').modal();
});