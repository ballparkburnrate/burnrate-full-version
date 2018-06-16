/*********************************
*   Start of Liquid Fill Gauges  *
******************************** */

// var cashPer = ((500/100) * window.cashData[0].amount);
var cashPer = ((4000/window.cashData.amount) * 100);
console.log(window.cashData.amount);
console.log(cashPer);

// Start of Gauge CSS and Animation Code (Edit Here to change colors and animation settings)
d3.select("#fillgauge1").call(d3.liquidfillgauge, cashPer);

d3.select("#fillgauge4").call(d3.liquidfillgauge, 50, {
  circleColor: "#9ED2DB",
  textColor: "#9ED2DB",
  waveTextColor: "#A3DCE6",
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
var startingCash = window.cashData.amount;
var YourList = [];

let totalExpenses = 0;
for (const expense of window.expenseData) {
  totalExpenses += expense.amount;
}

let totalIncome = 0;
for (const income of window.incomeData) {
  totalIncome += income.amount;
}

for (let i = 0; i < 11; i++) {
  var currentDate = moment();
  currentDate.set('month', currentDate.get('month') + i);
  var monthName = currentDate.format('MMM');

  console.log(monthName);
  // Do calculations
  startingCash += totalIncome;
  startingCash -= totalExpenses;
  YourList.push([monthName, startingCash]);
}

console.log("Start",startingCash,"exp",totalExpenses,"inc",totalIncome);

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