import React, { useEffect, useState } from 'react'
import { getData } from '../../apis/apis';
import BarChart from "react-apexcharts";

interface TopChartDataType {
  processName: string;
  output: number;
  expectOutput: number;
}

const TopChart = () => {
  const [topChartData, setTopChartData] = useState<TopChartDataType[]>([]);


  useEffect(() => {
    getData("TopChartData")
      .then((data) => {
        setTopChartData(data.processList);
      })
      .catch((error) => {
        console.error("User Data 데이터 불러오기 실패: ", error);
      });
  }, []);

  const xData = topChartData.map((value) => value.processName)

  // const maxExpectOutput = Math.max(...topChartData.map(item => item.expectOutput));

  // const expectOutputColors = topChartData.map(item =>
  //   item.expectOutput === maxExpectOutput ? '#FF9B3F' : '#FFFFFF'
  // );


  const options = {
    colors: ['#DEDFDF', '#FFFFFF'],
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: '14%',
      }
    },
    legend: {
      show: false
    },
    grid: { show: false },
    stroke: {
      width: [0, 1],
      dashArray: [0, 5],
      colors: ['#DEDFDF', '#bbb9ff'],
    },
    yaxis: {
      labels: {
        style: {
          colors: Array(xData.length).fill('#8C8F94'),
        },
      }
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
      categories: xData,
      labels: {
        style: {
          colors: Array(xData.length).fill('#DEDFDF'),
        },
      }
    },
    dataLabels: {
      enabled: false
    }
  };


  return (
    <div className='relative w-[1451px] h-[456px] p-12 flex flex-col items-end justify-center  border m-4 rounded-lg border-gray-300 bg-white' >
      <div className='flex gap-3 mt-8'>
        <div className='flex items-center gap-2'>
          <div className='bg-topChartRealColor w-3 h-1'></div>
          <span className='text-sm text-gray-500'>Target SMV</span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='bg-topChartRealColor w-3 h-3 rounded-full'></div>
          <span className='text-sm text-gray-500'>Real-Prodcution</span>
        </div>
      </div>
      <div className='absolute top-[136px] z-50 w-[1250px] border-[1px] border-topChartRealColor  border-bottom'></div>
      <BarChart
        width="1338px"
        height="390px"
        type="bar"
        options={options}
        series={[
          {
            name: '',
            data: topChartData.map((value) => value.output),
          },
          {
            name: '',
            data: topChartData.map((value) => value.expectOutput),
          }
        ]}
      />

    </div >
  )
}

export default TopChart;
