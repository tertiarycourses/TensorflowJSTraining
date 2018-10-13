var xs = [] // starts empty, to be populated with .push
var ys = [] // starts empty, to be populated with .push
var bestfit = [] // to be populated by tf.js

//Create the model
const model = tf.sequential();
model.add(tf.layers.dense({units: 10, inputShape: [1],activation: "relu"})); // layer 1
model.add(tf.layers.dense({units: 20, activation: "relu"})); // layer 2
model.add(tf.layers.dense({units: 1, activation: "linear"})); // output layer

const learningRate = 0.1;
const optimizer = tf.train.adam(learningRate);

model.compile({optimizer: optimizer , loss: 'meanSquaredError'})

document.getElementById('x').value = 1; 

document.getElementById("append").onclick = function(){
    var x = document.getElementById("x").value; // grab the current value for x
    var y = document.getElementById("y").value; // grab the current value for y
    xs.push(x) // append that value to the xs
    ys.push(y) // append that value to the ys
    document.getElementById('x').value = parseInt(x)+1; // add 1 to the x automatically

    // Train the model...then:
    model.fit(tf.tensor(xs), tf.tensor(ys), {epochs:200}).then(() => {
        bestfit = model.predict(tf.tensor(xs, [xs.length, 1])).dataSync(); // create best-fit line from xs data
        var ctx = document.getElementById("myChart").getContext('2d'); // begin chart
        // Chart data and settings:
        var myChart = new Chart(ctx, {
            type: 'line',
            options: {scales:{yAxes: [{ticks: {beginAtZero: true}}]}},
            data: {
                labels: xs,
                datasets: [
                {
                    label: 'Original Data',
                    data: ys,
                    borderWidth: 1,
                },{
                    label: 'Best Fit line',
                    data: bestfit,
                    borderWidth: 1,
                    borderColor: 'red',
                    fill:false
                },]
            },
        });
        });
    }
