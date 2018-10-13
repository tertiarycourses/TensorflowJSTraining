// xs = tf.tensor2d([[0,0],[0,1],[1,0],[1,1]])
// ys = tf.tensor2d([[0],[1],[1],[0]])

// Step 1: Data Proesssing
const X = tf.tensor2d([1, 2, 3, 4, 5], [5, 1])
const y = tf.tensor2d([2, 4, 6, 8, 10], [5, 1])
const X_test = tf.tensor2d([4],[1,1]) 

// Step 2: Define Model
const model = tf.sequential()
model.add(tf.layers.dense({units:20 , inputShape:[1], activation: 'relu'}))
model.add(tf.layers.dense({units:1, activation: 'linear'}))

// Step 3: Compile Model
// const optimize=tf.train.sgd(0.1);
// model.compile({optimizer: 'adam', loss: 'binaryCrossentropy', lr:0.0001})

model.compile({optimizer: 'sgd' , loss: 'meanSquaredError'})

// Step 4: Train Model and Predict
// model.fit(X,y)
// model.predict(X_test).print()

model.fit(X, y, {epochs:50}).then(() => {
    model.predict(X_test).print();
})

// Step 4: Training
// async function train(){
//     for(let i=0;i<10;i++){
//         const res = await model.fit(X,y);
//         console.log(res.history.loss[0]);
//     }
// }

// Step 5: Prediction
// train().then(() => { 
//     model.predict(X_test).print();
//   })

//The await operator is used to wait for a Promise. It can only be used inside an async function.
// The async function declaration defines an asynchronous function
// The then() method returns a Promise.



