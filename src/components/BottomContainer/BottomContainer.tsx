import React, { useEffect, useState } from 'react'
import { getData } from '../../apis/apis';
import BottomChart from '../Chart/BottomChart';
import DonutChartWorst from '../Chart/DonutChartWorst'
import DonutChartBest from '../Chart/DonutChartBest'
import BestUser from './BestUser'
import IdicatorsList from './IdicatorsList'

export interface idicatorsDataType {
  newSMV: number;
  loss: number;
  productive: number;
  efficiency: number;
  output: number;
  best: {
    sewingTime: number;
    otherTime: number;
  };
  worst: {
    sewingTime: number;
    otherTime: number;
  };
}

const BottomContainer = () => {
  const [idicatorsData, setIdicatorsData] = useState<idicatorsDataType | null>(null)

  useEffect(() => {
    getData("IndicatorsData")
      .then((data) => {
        setIdicatorsData(data?.processAnalysis);
      })
      .catch((error) => {
        console.error("User Data 데이터 불러오기 실패: ", error);
      });
  }, []);


  return (
    <div className='w-[1451px] h-[446px] border m-4 rounded-lg border-gray-300 bg-white p-5'>
      <div className='flex gap-7'>
        <BestUser number='#38' title='Back - Attach care label + size label' info1='Shell' info2='SN' info3='Patch Limiit' info4='A' name='Sije Kim' imgUrl='userimg' />
        <IdicatorsList idicatorsData={idicatorsData} />
        <DonutChartBest idicatorsData={idicatorsData?.best} />
        <DonutChartWorst idicatorsData={idicatorsData?.worst} />
      </div>
      <BottomChart />
    </div>
  )
}

export default BottomContainer


