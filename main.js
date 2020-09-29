let arrOfVals = [];
let states = [];
var numberOfRect;
let wi = 100;

const selectElement = document.getElementById("size");

selectElement.addEventListener('change', (event) => {
  const result = document.getElementById("size").value;
  wi = Number.parseInt(result);
  reset();
});

function run(){
  var sel = document.getElementById("algo");
  // document.getElementById("algo").disabled = true;
  // document.getElementById("run").disabled = true;
  // document.getElementById("reset").disabled = true;
  // document.getElementById("size").disabled = true;
  if(sel.value === "qs".valueOf()) {
    document.getElementById("algo").disabled = true;
    document.getElementById("run").disabled = true;
    document.getElementById("reset").disabled = true;
    document.getElementById("size").disabled = true;
    quickSort(states, arrOfVals, 0, arrOfVals.length-1);
    document.getElementById("algo").disabled = false;
    document.getElementById("run").disabled = false;
    document.getElementById("reset").disabled = false;
    document.getElementById("size").disabled = false;
  }else if( sel.value === "bs".valueOf()) {
    bubbleSort(arrOfVals,0, arrOfVals.length);
  } else if ( sel.value === "ms".valueOf()) {
    mergeSort( arrOfVals, states);
  } else if ( sel.value === "ss".valueOf()) {
    selectionSort(arrOfVals, states);
  }
  // document.getElementById("algo").disabled = false;
  // document.getElementById("run").disabled = false;
  // document.getElementById("reset").disabled = false;
  // document.getElementById("size").disabled = false;
}

function reset(){
  numberOfRect = floor(windowWidth/wi);
  //console.log(numberOfRect);
  arrOfVals =[];
  for (var i = 0; i<numberOfRect-1; i++) {
    arrOfVals[i] = floor(random(floor(windowHeight*0.1),floor(windowHeight*0.8)));
    states[i] = -1;
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight-100);
  //console.log(wi);
  numberOfRect = floor(windowWidth/wi);
  //console.log(numberOfRect);
  for (var i = 0; i<numberOfRect-1; i++) {
    arrOfVals[i] = floor(random(floor(windowHeight*0.1),floor(windowHeight*0.8)));
    states[i] = -1;
  }
}



function draw() {
  background(255);

  for (let i = 1; i < arrOfVals.length; i++) {
    stroke(1);
    if (states[i] == 0) {
      fill(0,120,0,120);
    } else if (states[i] == 1) {
      fill(120,0,0,120);
    } else {
      fill(0,0,120,120);
    }
    if(i*wi <= windowWidth - wi) {
      rect(i * wi, height - arrOfVals[i], wi, arrOfVals[i]);
    }

  }
}
