import React from "react";
import { Line } from "react-chartjs-2";
const xLabel = [];
const yData = [];

const DataChart = ({ dataFromTF }) => {
	console.log("dataFromTF");
	console.log(dataFromTF);

	// xLabel.push(dataFromTF.xs);
	// yData.push((dataFromTF.ys));
	// console.log(xLabel);
	const data = {
		labels: dataFromTF.xs,
		datasets: [
			{
				label: "theorique",
				data: dataFromTF.ys,
				// fill: false,
				// backgroundColor: "rgb(0,255,0)",
				borderColor: "rgb(0,0,0)",
				// tension: 0.1,
                pointRadius:0
			},
			{
				label: "predite",
				data: dataFromTF.dataPredicted,
				// fill: false,
				// backgroundColor: "rgb(0,255,0)",
				borderColor: "rgb(255,0,0)",
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
export default DataChart;
