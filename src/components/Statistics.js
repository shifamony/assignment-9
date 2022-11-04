import React, {useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend,} from 'recharts';
const Statistics = () => {
    const [charts, setCharts] = useState([]);
   useEffect(() => {

    axios.get('https://openapi.programming-hero.com/api/quiz/')
    .then(data => {
        const chartLoaded = data.data.data;
        console.log(chartLoaded);
        const chartData = chartLoaded.map(chart => {
            const singleChart = {
                name: chart.name,
                total: chart.total
            }
            return singleChart;

        });
        console.log(chartData);
        setCharts(chartData)
    })
  },[])
  
  
    return (
        <div className='flex justify-center items-center mt-60'>
             <BarChart width={800} height={300} data={charts} >
            <Bar dataKey="total" fill="#8884d8" />
            <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
            </BarChart>
        </div>
    );
};

export default Statistics;