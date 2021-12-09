import axios from 'axios';
import { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { SaleSuccess } from 'types/sale';
import { BASE_URL } from 'utils/requests';

type ChartData = 
    {
        labels: {
            categories: string[]
        },
        series: [
            {
            name: string,    
            data: number[]
            }
        ]
    };

const BarChart = () => {

    const[chartData, setChartData] = useState<ChartData>({labels: {categories: []},series:[{name: '', data : []}]});

    useEffect(() => {
        axios.get(`${BASE_URL}/sales/success-by-seller`)
            .then((response) => { 
                const data = response.data as SaleSuccess[];
                const MyLabels = data.map(x => x.sellerName);
                const Visited = data.map(x => x.visited);
                const Deals = data.map(x => x.visited);
                
                let SuccessRate = [];

                for(let i = 0; i < Visited.length; i++){
                    let rate = Visited[i]/Deals[i];
                    SuccessRate.push(rate); 
                }

                setChartData({labels: {categories: MyLabels},series:[{name: '% Sucesso', data : SuccessRate}]})
            })
    })


    const options = {
        plotOptions: {
            bar: {
                horizontal: true,
            }
        },
    };

    // const mockData = {
    //     labels: {
    //         categories: ['Anakin', 'Barry Allen', 'Kal-El', 'Logan', 'Padmé']
    //     },
    //     series: [
    //         {
    //             name: "% Sucesso",
    //             data: [43.6, 67.1, 67.7, 45.6, 71.1]
    //         }
    //     ]
    // };

    return (
        <Chart   
            options = {{...options, xaxis : chartData.labels}}
            series = {chartData.series}
            type = "bar"
            height = "240"
        />
    );
}
export default BarChart;