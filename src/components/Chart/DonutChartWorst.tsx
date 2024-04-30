import PieChart from "react-apexcharts";


export interface idicatorsData {
  idicatorsData: {
    sewingTime: number;
    otherTime: number;
  } | undefined;
}


const DonutWorstChart = ({ idicatorsData }: idicatorsData) => {
  const convertToSeconds = (milliseconds: number | null) => {
    if (milliseconds === null) return null;
    return milliseconds / 1000;
  };


  const otherSeconds = convertToSeconds(idicatorsData?.otherTime!)!;
  const sewingSeconds = convertToSeconds(idicatorsData?.sewingTime!)!;
  const totalSeconds = (otherSeconds ?? 0) + (sewingSeconds ?? 0);

  const sewingPercentage = (sewingSeconds / totalSeconds) * 100;



  const chartData = {
    series: [sewingSeconds, totalSeconds - sewingSeconds],
    options: {
      colors: ['#F65959', '#DEDFDF'],
      plotOptions: {
        pie: {
          donut: {
            size: '50%',
          }
        }
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false
      },
    },
  };

  return (
    <div className='w-[277px] h-[120px] p-4 rounded-lg border border-gray-200 relative'>
      <div className="flex flex-col items-end justify-center gap-2">
        <div className="flex">
          <span className="text-sm font-bold text-worstChartColor">Best</span>
          <div className="text-sm font-bold text-worstChartColor ml-[52px]">
            <span className="">{totalSeconds.toFixed(1)}</span>
            <span className="text-sm">sec</span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-2">
          <div className="w-3 h-3 bg-worstChartColor"></div>
          <span className="text-sm">Sewing</span>
          <div className="ml-2">
            <span className="text-sm font-bold">{sewingSeconds.toFixed(1)}</span>
            <span className="text-sm">sec</span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-3">
          <div className="w-3 h-3 bg-dountChartText"></div>
          <span className="text-sm">Other</span>
          <div className="ml-[10px]">
            <span className="font-bold text-sm">{otherSeconds.toFixed(1)}</span>
            <span className="text-sm">sec</span>
          </div>
        </div>
      </div>
      <div className="absolute left-[-18px] top-1">
        <PieChart
          options={chartData.options}
          series={chartData.series}
          type="donut"
          width="160"
        />
      </div>
      <p className="font-bold text-xs absolute top-[50px] left-11">{sewingPercentage.toFixed(1)}%</p>
    </div>
  );
};

export default DonutWorstChart;
