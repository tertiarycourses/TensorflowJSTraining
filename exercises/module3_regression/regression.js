//Step 1: Data and Variables 
const X = [1,2,3,4,5];
const y = [2,4,6,8,10];

const m = tf.variable(tf.scalar(Math.random()));
const b = tf.variable(tf.scalar(Math.random()));
  
//Step 2: Model 
function model(x) {
    return tf.tidy(() =>  {
      return m.mul(x).add(b);
        });
    }
  
//Step 3: Loss Function  
function loss(yhat, y) { 
    const error = yhat.sub(y).square().mean();
    return error;
    }

//Step 4: Optimizer
const learningRate = 0.01;
const optimizer = tf.train.sgd(learningRate);

//Step 5: Training

plot();
function train() {
    for (let i = 0; i< 20; i++) {
        optimizer.minimize(()=> {
        const yhat = model(tf.tensor1d(X));
        return loss(yhat, tf.tensor1d(y))
      });
      plot();
  }
}

function plot() {
  let rawData = [];
  let fitData = [];
  for (let i = 0; i < X.length; i++) {
      rawData.push({ x: X[i], y: y[i] });
      fitData.push({ x: X[i], y: m.dataSync()[0]*X[i] + b.dataSync()[0] });

  }
var ctx = document.getElementById("myChart").getContext("2d");

new Chart(ctx, {
      type: "line",
      data: {
        datasets: [
          {
            label: "Raw Data",
            showLine: false,
            data: rawData,
            fill: false
          },
          {
            label: "Y = "+m.dataSync()[0]+"X + " + b.dataSync()[0],
            data: fitData,
            borderColor: "red",
            fill: false
          }
        ]
      },
      options: {scales: {xAxes: [{type: "linear",position: "bottom"}]}}
    });
  }

