var cashPer = ((window.cashData[0].amount/100) * window.cashData[0].amount);

d3.select("#fillgauge1").call(d3.liquidfillgauge, cashPer);

d3.select("#fillgauge4").call(d3.liquidfillgauge, 50, {
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