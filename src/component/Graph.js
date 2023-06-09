// Graph.js
import React from 'react';
import { Line } from 'react-chartjs-2';

import 'chart.js/auto';


const Graph = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June'],
    datasets: [
      {
        label: 'Example Data',
        data: [40, 55, 80, 60, 32, 66],
        fill: false,
        borderColor: 'rgb(75,192,192,1)',
        
        

      },
    ],
  };
const graphStyles={
    width:'1000px',
    height:'500px'
};
  return (
    <div className="graph"  style={graphStyles}>
        
      <Line data={data}  />
 
    </div>
  );
  
};

export default Graph;