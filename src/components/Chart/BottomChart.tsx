import { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import { getData } from "../../apis/apis";
import { ApexOptions } from "apexcharts";

interface BottomChartDataType {
  _id: string;
  sewingTime: number;
  otherTime: number;
  createdAt: string;
}

const BottomChart = () => {
  const [bottomChartData, setBottomChartData] = useState<BottomChartDataType[]>([])

  useEffect(() => {
    getData("BottomChartData")
      .then((data) => {
        setBottomChartData(data.clickList);
      })
      .catch((error) => {
        console.error("User Data 데이터 불러오기 실패: ", error);
      });
  }, []);

  const totalTime = bottomChartData.map(item => item.sewingTime + item.otherTime);
  const xData = bottomChartData.map(item => item.createdAt.substring(11, 16));

  const tooltipData = bottomChartData.map(item => ({
    xData: item.createdAt.substring(11, 16),
    sewingTime: item.sewingTime / 10000,
    otherTime: item.otherTime / 10000,
    totalTime: (item.sewingTime + item.otherTime) / 10000,
  }));

  const options: ApexOptions = {
    chart: {
      toolbar: {
        show: false
      },
    },
    grid: { show: false },
    xaxis: {
      axisTicks: { show: false },
      categories: xData,
      labels: {
        style: {
          colors: Array(xData.length).fill('#8C8F94'),
        },
      }
    },
    yaxis: {
      show: false
    },
    tooltip: {
      custom: function ({ seriesIndex, dataPointIndex, w }: any) {
        const data = tooltipData[dataPointIndex];
        return `
          <div class="w-[391px] h-[216px] border-1 p-4 flex flex-col items-start gap-3">
            <div class="text-lg flex gap-2">
              <p class="font-bold">Now</p>
              <p>${data.xData}</p>
            </div>  
            <div class="w-[360px] h-[120px] border"></div>
            <div class="w-full flex justify-between">
              <p class="font-semibold text-lg">Cycle Time</p>
              <div>
                <span class="font-semibol text-lg">${data.totalTime.toFixed(1)}</span>
                <span class="text-lg">sec</span>
              </div>
            </div>
            <div class="w-full flex justify-between">
              <div class="flex justify-center items-center gap-3">
                <div class="w-2 h-2 bg-scoreDataColor"></div>
                <span class="text-lg">Sewing</span>
              </div>
              <div>
                <span class="font-semibol text-lg">${data.sewingTime.toFixed(1)}</span>
                <span class="text-lg">sec</span>
              </div>
            </div>
            <div class="w-full flex justify-between">
            <div class="flex justify-center items-center gap-3">
              <div class="w-2 h-2 bg-dountChartText"></div>
              <span class="text-lg">Other</span>
            </div>
            <div>
              <span class="font-semibol text-lg">${data.otherTime.toFixed(1)}</span>
              <span class="text-lg">sec</span>
            </div>
          </div>
          </div>
        `;
      }
    }
  };

  const series = [{
    name: 'Sewing - Other - Cycle Time',
    data: totalTime,
    color: '#5550FF'
  }];

  return (
    <div className="w-[1393px] h-[188px] flex flex-col items-end justify-center mt-10 relative">
      <div className='flex gap-3 my-10'>
        <div className='flex items-center gap-2'>
          <div className='bg-worstChartColor w-3 h-1'></div>
          <span className='text-sm text-gray-500'>Target SMV</span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='bg-bottomChartGoddColor w-3 h-3 rounded-full'></div>
          <span className='text-sm text-gray-500'>Good</span>
        </div>
        <div className='flex items-center gap-2'>
          <div className='bg-bottomChartBadColor w-3 h-3 rounded-full'></div>
          <span className='text-sm text-gray-500'>Bad</span>
        </div>
      </div>
      <p className="absolute left-2 top-[15px] text-base text-gray-400">(SMV)</p>
      <div className="absolute top-5 w-[1330px] h-[180px] bg-gradient-to-t from-blue-100 to-red-100 z-0">
        <div className="absolute top-[50%] left-[-37px] z-50 flex items-center justify-center gap-2">
          <span className="text-red-400 px-[5px] py-[1px] rounded-md bg-red-100 text-xs text-center">18s</span>
          <div className="w-[1330px] h-[1px] bg-worstChartColor"></div>
        </div>
      </div>
      <Chart options={options} series={series} type="line" width="1340px" height="200px" className="z-10" />
    </div>

  );
}

export default BottomChart;
