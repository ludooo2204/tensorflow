import * as tf from "@tensorflow/tfjs";
import { losses } from "@tensorflow/tfjs";
import { useState, useEffect } from "react";
import DataChart from "./DataChart";
import TrainingChart from "./TrainingChart";

export const ML = () => {
	const [result, setResult] = useState("");
	const [epochsState, setEpochs] = useState("");
	const [lossState, setLoss] = useState("");
	const [dataPredicted, setDataPredict] = useState("");
	const [xsData, SetXs] = useState("");
	const [ysData, SetYs] = useState("");
	const EPOCHS = 200;
	let losses = [];
	let epoches = [];
	const onBatchEnd = (logs) => {
		console.log(logs);
		setLoss(logs);
		// console.log("getPoids");
		// getPoids()
	};
	const onEpochEnd = (epochs, logs) => {
		//   console.log(epochs/EPOCHS);
		// console.log((100 * (epochs+1)) / EPOCHS + " %");
		setEpochs(epochs);
	};
	useEffect(() => {
		const doublePi = tf.scalar(2.0 * Math.PI);
		const xs = tf.mul(doublePi, tf.range(-0.5, 0.5, 0.01));
		const noise = tf.randomNormal([xs.size]).mul(0.05);
		// const ys = xs.mul(xs).mul(xs);
		const ys = tf.sin(xs).add(noise);

		const w0 = tf.scalar(Math.random() - 0.5).variable();
		const w1 = tf.scalar(Math.random() - 0.5).variable();
		const w2 = tf.scalar(Math.random() - 0.5).variable();
		const w3 = tf.scalar(Math.random() - 0.5).variable();

		const f_x = x => {
			return w3.mul(x).mul(x).mul(x)
			.add(w2.mul(x).mul(x))
			.add(w1.mul(x))
			.add(w0);
		};
		// console.log('f_x(xs)');
		xs.print();
		ys.print();
		SetXs(xs.dataSync());
		SetYs(ys.dataSync());
		const loss = (pred, label) => pred.sub(label).square().mean();
		const learningRate = 0.03;
		const optimizer = tf.train.adam(learningRate);
		for (let i = 0; i < 500; i++) {
			const l = optimizer.minimize(() => {
				// predictions.push(f_x(xs).dataSync());
				setResult(loss(f_x(xs), ys).dataSync())
				return loss(f_x(xs), ys)
			}, true);
			// console.log(l.dataSync()[0]);
			 
			losses.push(l.dataSync()[0]);
			epoches.push(i)
		}
		// console.log('losses')
		// console.log(losses)
		// console.log(f_x(xs).dataSync());
		setDataPredict(f_x(xs).dataSync())
		setLoss(losses)
		setEpochs(epoches)
		console.log(w0.dataSync()[0]);
		console.log(w1.dataSync()[0]);
		console.log(w2.dataSync()[0]);
		console.log(w3.dataSync()[0]);
		// const model = tf.sequential();
		// model.add(tf.layers.dense({ units: 50, inputShape: [1] ,activation:'sigmoid'}));
		// model.add(tf.layers.dense({ units: 1, inputShape: [1] }));

		// // Prepare the model for training: Specify the loss and the optimizer.
		// // model.compile({ loss: "meanSquaredError", optimizer: tf.train.sgd(0.001) });
		// model.compile({ loss: "meanSquaredError", optimizer: "sgd" });

	
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
		// const prim03 = [
		// 	1.87e-7,
		// 	2.2e-7,
		// 	4.78e-7,
		// 	6.8e-7,
		// 	1.31e-6,
		// 	2.02e-6,
		// 	4.48e-6,
		// 	8.7e-6,
		// 	1.45e-5,
		// 	3.73e-5,
		// 	7.8e-5,
		// 	1.18e-4,
		// 	1.64e-4,
		// 	3.17e-4,
		// 	5.13e-4,
		// 	7.4e-4,
		// 	1.13e-3,
		// 	3e-3,
		// 	4.03e-3,
		// ];
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
		// Generate some synthetic data for training.
		// const ys = tf.tensor2d(etalon, [etalon.length, 1]);
		// const xs = tf.tensor2d(prim03, [etalon.length, 1]);
		// xs.print();
		// ys.print();

		// console.log(xs)
		// console.log(ys)
		// Train the model using the data.
		// model
		// 	.fit(xs, ys, {
		// 		epochs: EPOCHS,
		// 		callbacks: [{ onBatchEnd }, { onEpochEnd }],
		// 	})
		// 	.then((info) => {
		// 		console.log(info);
		// 		// Use the model to do inference on a data point the model hasn't seen before:
		// 		// model.predict(tf.tensor2d([-4.838632], [1, 1])).print();
		// 		const resultat = model.predict(tf.tensor2d([0.004], [1, 1])).dataSync();
		// 		// const resultat = model.predict(tf.tensor2d(prim03Log, [etalon.length, 1])).dataSync();
		// 		console.log(resultat);

		// 		setResult(resultat);
		// 		// model.save("downloads://my-model");

		// 		// console.log(Math.pow(10, resultat));
		// 	});
	
	}, []);

	// const getPoids = () => {
	// 	const poids = model.getWeights();
	// 	for (const iterator of poids) {
	// 		console.log(iterator.dataSync());
	// 	}
	// };
	let dataForTrainingChart = { lossState, epochsState };
	let dataForDataChart = { xs: xsData, ys: ysData ,dataPredicted};
	
console.log(result);
	return (
		<div>
	<h2>Taux d'entrainements {result} </h2>
			<div style={{flexDirection:"row",display:"flex"}}><TrainingChart dataFromTF={dataForTrainingChart} />			<DataChart dataFromTF={dataForDataChart} /></div>
			<h2>Data</h2>

		</div>
	);
};
export default ML;
