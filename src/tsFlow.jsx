import * as tf from "@tensorflow/tfjs";
import {useState,useEffect } from 'react'
// Define a model for linear regression.
// const model = tf.sequential();
// model.add(tf.layers.dense({ units: 10, inputShape: [1] }));
// model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

// // Prepare the model for training: Specify the loss and the optimizer.
// model.compile({ loss: "meanSquaredError", optimizer: "sgd" });

// const onBatchEnd = (batch, logs) => {
// 	console.log(logs.loss);
// 	console.log("getPoids");
// 	// getPoids()
// };
// const onEpochEnd = (epochs, logs) => {
// 	console.log((100 * epochs) / EPOCHS + " %");
// };
// const etalon = [
// 	2.88e-7,
// 	3.44e-7,
// 	7.37e-7,
// 	1.05e-6,
// 	2.06e-6,
// 	3.15e-6,
// 	7.07e-6,
// 	1.48e-5,
// 	2.41e-5,
// 	6.1e-5,
// 	1.22e-4,
// 	1.74e-4,
// 	2.43e-4,
// 	4.56e-4,
// 	7.25e-4,
// 	1.06e-3,
// 	1.67e-3,
// 	4.92e-3,
// 	6.77e-3,
// ];
// const prim03 = [1.87e-7, 2.2e-7, 4.78e-7, 6.8e-7, 1.31e-6, 2.02e-6, 4.48e-6, 8.7e-6, 1.45e-5, 3.73e-5, 7.8e-5, 1.18e-4, 1.64e-4, 3.17e-4, 5.13e-4, 7.4e-4, 1.13e-3, 3e-3, 4.03e-3];
// let etalonLog = [];
// let prim03Log = [];

// for (const iterator of etalon) {
// 	let newIterator = Math.log10(iterator);
// 	etalonLog.push(newIterator);
// }
// for (const iterator of prim03) {
// 	let newIterator = Math.log10(iterator);
// 	prim03Log.push(newIterator);
// }
// console.log(etalonLog);
// console.log(prim03Log);
// // Generate some synthetic data for training.
// const ys = tf.tensor2d(etalonLog, [etalon.length, 1]);
// const xs = tf.tensor2d(prim03Log, [etalon.length, 1]);
// xs.print();
// ys.print();
// const EPOCHS = 10;
// // console.log(xs)
// // console.log(ys)
// // Train the model using the data.
// model
// 	.fit(xs, ys, {
// 		epochs: EPOCHS,
// 		callbacks: [{ onBatchEnd }, { onEpochEnd }],
// 	})
// 	.then((info) => {
// 		console.log(info);
// 		// Use the model to do inference on a data point the model hasn't seen before:
// 		// model.predict(tf.tensor2d([-4.838632], [1, 1])).print();
// 		const resultat = model.predict(tf.tensor2d([-4.838632], [1, 1])).dataSync();
// 		console.log(resultat);

// 		model.save("downloads://my-model");

// 		console.log(Math.pow(10, resultat));
// 	});

// const getPoids = () => {
// 	const poids = model.getWeights();
// 	for (const iterator of poids) {
// 		console.log(iterator.dataSync());
// 	}
// };

export const ML=()=>{
  const [result, setResult] = useState("nada")
  
  useEffect(() => {
 
    const model = tf.sequential();
model.add(tf.layers.dense({ units: 10, inputShape: [1] }));
model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

// Prepare the model for training: Specify the loss and the optimizer.
model.compile({ loss: "meanSquaredError", optimizer: "sgd" });

const onBatchEnd = (batch, logs) => {
	console.log(logs.loss);
	console.log("getPoids");
	// getPoids()
};
const onEpochEnd = (epochs, logs) => {
	console.log((100 * epochs) / EPOCHS + " %");
};
const etalon = [
	2.88e-7,
	3.44e-7,
	7.37e-7,
	1.05e-6,
	2.06e-6,
	3.15e-6,
	7.07e-6,
	1.48e-5,
	2.41e-5,
	6.1e-5,
	1.22e-4,
	1.74e-4,
	2.43e-4,
	4.56e-4,
	7.25e-4,
	1.06e-3,
	1.67e-3,
	4.92e-3,
	6.77e-3,
];
const prim03 = [1.87e-7, 2.2e-7, 4.78e-7, 6.8e-7, 1.31e-6, 2.02e-6, 4.48e-6, 8.7e-6, 1.45e-5, 3.73e-5, 7.8e-5, 1.18e-4, 1.64e-4, 3.17e-4, 5.13e-4, 7.4e-4, 1.13e-3, 3e-3, 4.03e-3];
let etalonLog = [];
let prim03Log = [];

for (const iterator of etalon) {
	let newIterator = Math.log10(iterator);
	etalonLog.push(newIterator);
}
for (const iterator of prim03) {
	let newIterator = Math.log10(iterator);
	prim03Log.push(newIterator);
}
console.log(etalonLog);
console.log(prim03Log);
// Generate some synthetic data for training.
const ys = tf.tensor2d(etalonLog, [etalon.length, 1]);
const xs = tf.tensor2d(prim03Log, [etalon.length, 1]);
xs.print();
ys.print();
const EPOCHS = 10;
// console.log(xs)
// console.log(ys)
// Train the model using the data.
model
	.fit(xs, ys, {
		epochs: EPOCHS,
		callbacks: [{ onBatchEnd }, { onEpochEnd }],
	})
	.then((info) => {
		console.log(info);
		// Use the model to do inference on a data point the model hasn't seen before:
		// model.predict(tf.tensor2d([-4.838632], [1, 1])).print();
	const	resultat = model.predict(tf.tensor2d([-4.838632], [1, 1])).dataSync();
		console.log(resultat);
setResult(resultat)
		// model.save("downloads://my-model");

		console.log(Math.pow(10, resultat));
	});
  }, [])
 

// const getPoids = () => {
// 	const poids = model.getWeights();
// 	for (const iterator of poids) {
// 		console.log(iterator.dataSync());
// 	}
// };
  return (
    <h1 >resultat= {result}</h1>
    
  )
}
export default ML;