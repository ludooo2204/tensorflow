import React from "react";
import { Line } from "react-chartjs-2";
const xLabel = [];
const yData = [];

const LineChart = ({ dataFromTF }) => {
	// console.log("dataFromTF");
	// console.log(dataFromTF);

	xLabel.push(dataFromTF.epochsState);
	yData.push((dataFromTF.lossState));
	// console.log(xLabel);
	const data = {
		labels: xLabel,
		datasets: [
			{
				label: "rr",
				data: yData,
				fill: true,
				backgroundColor: "rgb(0,0,0)",
				borderColor: "rgb(255,255,255)",
				// tension: 0.1,
                pointRadius:0
			},
		],
	};
	const options = {
        animation:false,
		scales: {
			// y: {
			// 	min: 0,
			// 	max: 0.01,
			// },
           
		},
	};

	return (
		<div style={{width:'80%',height:'80%',margin:"auto"}}>
			<Line style={{backgroundColor:"black"}}   data={data} options={options} />
		</div>
	);
};
export default LineChart;
