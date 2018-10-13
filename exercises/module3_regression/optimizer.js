function f(x) 
{
  return x.pow(2).add(x.mul(-1)).add(tf.scalar(1))
}

function minimize(epochs , lr)
{
  let y = tf.variable(tf.scalar(0.1)) 
  const optimizer = tf.train.sgd(lr);  
  for(let i = 0 ; i < epochs ; i++) optimizer.minimize(() => f(y));
  return y 
}

let a = minimize(200,0.9)
a.print()
