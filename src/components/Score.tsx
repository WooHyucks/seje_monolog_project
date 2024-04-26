import React, { useEffect, useState } from 'react'
import { getData } from '../apis/apis';

interface ScoreDataType {
  id: number;
  name: string;
  score: string;
}

const Score = () => {
  const [ScroeData, setScroeData] = useState<ScoreDataType[]>([])

  useEffect(() => {
    getData("ScoreData")
      .then((data) => {
        setScroeData(data);
      })
      .catch((error) => {
        console.error("User Data 데이터 불러오기 실패: ", error);
      });
  }, []);

  return (
    <div className='flex justify-center gap-[30px]'>
      {ScroeData.map((data) => (
        <ScoreList id={data.id} name={data.name} score={data.score} />
      ))}
    </div>
  )
}

export const ScoreList = ({
  id, name, score
}: ScoreDataType) => {
  return (
    <div className='w-[344px] h-[147px] border border-2 rounded-xl bg-scoreBgColor' key={id}>
      <div className="text-left p-7">
        <p className='text-gray-600 font-bold text-lg mb-2'>{name}</p>
        {name === "Prediction" ? (
          <>
            <span className='text-scoreDataColor font-bold text-3xl'>{score}</span>
            <span className='text-scoreDataColor text-lg ml-1'>%</span>
          </>
        ) : (
          <>
            <span className='text-scoreDataColor font-bold text-3xl'>{score}</span>
            <span className='text-scoreDataColor text-lg ml-1'>pcs</span>
          </>
        )}
      </div>
    </div>
  );
};

export default Score