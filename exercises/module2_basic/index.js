// Tensor
// const a = tf.tensor([[4,6],[5,9],[13,25],[1, 57]]);
// const b = tf.tensor([4,6,5,9,13,25,1, 57], shape=[4,2]);

// a.print();
// b.print();

// Variable
// const  a = tf.variable(tf.zeros([8]));
// a.print();

// a.assign(tf.tensor1d([4, 12, 5, 6, 56, 3, 45, 3]));
// a.print();

// Operations
// const a = tf.tensor1d([4, 6, 5, 9]);
// const b = tf.tensor1d([5, 4, 23, 45]);

// // prints
// a.print();
// b.print();

// adds and multiplies and prints
// a.add(b).print();
// a.mul(b).print();

// DataSync
// const c = a.add(b).dataSync()
// const c = a.add(b).dataSync()[0]
// console.log(c)

// Ex: Operation
// const a = tf.tensor2d([1, 2], [1, 2]);
// const b = tf.tensor2d([1, 2, 3, 4], [2, 2]);
// a.matMul(b).print();  

// Chained Operations
// const a = tf.tensor2d([[1.0, 2.0], [3.0, 4.0]]);
// const b = tf.tensor2d([[5.0, 6.0], [7.0, 8.0]]);
// const sq_sum = a.add(b).square();
// sq_sum.print();

// Ex: Chained Operations
// a = tf.scalar(2)
// b = tf.scalar(4)
// c = tf.scalar(8)
// d = tf.scalar(16)

// x = tf.tensor1d([1,2])
// e = a.mul(x.pow(3))
//       .add(b.mul(x.square()))
//       .add(c.mul(x))
//       .add(d)

// e.print()

// const a = tf.tensor([1,2,3]);
// a.dispose();


// tf.tidy Example 

// function simpleAdd(x, y) {
//     return tf.tidy(() => {
//         const a = x;
//         const b = y;
//         const y = a.add(b);
//         return y;
//     });
// }

// const a = tf.tensor1d([4, 6, 5, 9]);
// const b = tf.tensor1d([5, 4, 34, 21]);
// const result = simpleAdd(a,b)
// result.print();

// const y = tf.tidy(() => {
//     const two= tf.scalar(2);
//     const aa = tf.scalar(2);
//     const b = aa.square();
//     return b.add(two);
//  });

 
// Ex: tf.tidy()
// function predict(input) {
//     return tf.tidy(() => {
//         const a = tf.scalar(2);
//         const b = tf.scalar(4);
//         const c = tf.scalar(8);  
        
//         const x = tf.scalar(input);
//         const ax2 = a.mul(x.square());
//         const bx = b.mul(x);
//         const y = ax2.add(bx).add(c);
//         return y;
//     });
//   }
  
// const result = predict(2);
// result.print()


