import React from "react";
import { Line } from "react-chartjs-2";
const xLabel = [];
const yData = [];

const TrainingChart = ({ dataFromTF }) => {
	console.log("dataFromTF");
	console.log(dataFromTF);

	// xLabel.push(dataFromTF.epochsState);
	// yData.push((dataFromTF.lossState));
	// console.log(xLabel);
	// console.log(yData);
	const data = {
		labels: dataFromTF.epochsState,
		datasets: [
			{
				label: "rr",
				data: dataFromTF.lossState,
				// fill: true,
				// backgroundColor: "rgb(0,0,0)",
				borderColor: "rgb(0,0,0)",
				// tension: 0.1,
                pointRadius:0
			},
		],
	};
	const options = {
        // animation:false,
		scales: {
			// y: {
			// 	min: 0,
			// 	max: 0.01,
			// },
           
		},
	};

	return (
		<div style={{width:'50%',height:'50%',margin:"auto"}}>
			<Line style={{backgroundColor:"lightgrey"}}   data={data} options={options} />
		</div>
	);
};
export default TrainingChart;
