var tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node')
var iris = require("./iris.json");
var irisTesting = require("./iris-testing.json")

// convert/setup our data
const trainingData = tf.tensor2d(iris.map(item => [
  item.sepal_length, item.sepal_width, item.petal_length, item.petal_width,
]))
const outputData = tf.tensor2d(iris.map(item => [
  item.species === "setosa" ? 1 : 0,
  item.species === "virginica" ? 1 : 0,
  item.species === "versicolor" ? 1 : 0,
]))

const testingData = tf.tensor2d(irisTesting.map(item => [
  item.sepal_length, item.sepal_width, item.petal_length, item.petal_width,
]))

// build neural network
const model = tf.sequential()

model.add(tf.layers.dense({
  inputShape: [4],
  activation: "sigmoid",
  units: 5,
}))
model.add(tf.layers.dense({
  activation: "sigmoid",
  units: 3,
}))
model.add(tf.layers.dense({
  activation: "sigmoid",
  units: 3,
}))
model.compile({
  loss: "meanSquaredError",
  optimizer: tf.train.adam(.06),
})
// train/fit our network
model.fit(trainingData, outputData, {epochs: 100})
  .then((history) => {
    model.predict(testingData).print()
  })
