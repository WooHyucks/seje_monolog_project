import React, { useEffect, useState } from 'react'
import { getData } from '../../apis/apis';
import Chart from "react-apexcharts";

interface firstChartDataType {
  processName: string,
  output: number,
  expectOutput: number
}

const TopChart = () => {
  const [firstChartData, setFirstChartData] = useState<firstChartDataType[]>([])


  useEffect(() => {
    getData("TopChart")
      .then((data) => {
        setFirstChartData(data.processList);
      })
      .catch((error) => {
        console.error("User Data 데이터 불러오기 실패: ", error);
      });
  }, []);

  return (
    <div className='border m-4 rounded-lg border-gray-300 bg-white'>
      <div className='w-[600px]'>
        <Chart
          type="bar"
          series={[
            {
              name: '',
              data: firstChartData.map((value) => value.output),
            },
            {
              name: '',
              data: firstChartData.map((value) => value.expectOutput),
            }
          ]}
          options={{
            colors: ['#DEDFDF', '#FFFFFF'],
            plotOptions: {
              bar: {
                borderRadius: 8
              }
            },
            grid: { show: false },
            stroke: {
              width: [0, 1],
              dashArray: [0, 5],
              colors: ['#DEDFDF', '#bbb9ff'],
            },
            chart: {
              parentHeightOffset: 10,
              stacked: true,
              toolbar: {
                show: false,
              },
              width: 12
            },
            xaxis: {
              axisTicks: { show: false },
              categories: ["#31", "#32", "#33", "#34", "#35", "#36", "#37", "#38", "#39", "#40", "#41", "#42", "#43", "#44"],
              labels: {
                style: {
                  colors: ['#DEDFDF'],
                },
              },
            },
          }} />
      </div>
    </div>
  )
}

export default TopChart