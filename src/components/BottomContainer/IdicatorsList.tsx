import { idicatorsDataType } from './BottomContainer';

export interface idicatorsListDataType {
  idicatorsData: idicatorsDataType | null
}


type IdicatorsItemType = {
  name: string;
  score: number | undefined;
}

const IdicatorsList = ({ idicatorsData }: idicatorsListDataType) => {
  return (
    <div className='w-[197px] h-[120px] rounded-lg border border-gray-200 p-3'>
      <IdicatorsItem name="Output" score={idicatorsData?.output} />
      <IdicatorsItem name="Efficiency" score={idicatorsData?.efficiency} />
      <IdicatorsItem name="Loss" score={idicatorsData?.loss} />
      <IdicatorsItem name="Productivity" score={idicatorsData?.productive} />
    </div>
  )
}

export const IdicatorsItem = ({
  name, score
}: IdicatorsItemType) => {
  return (
    <div className='flex justify-between'>
      <div className='flex gap-2'>
        <img className='w-4' src={`/images/${name}.svg`} alt="clothes" />
        <span className='text-gray-700  text-sm'>{name}</span>
      </div>
      <div>
        {name === "Output" ? (
          <>
            <span className='font-bold text-sm'>{score}</span>
            <span className='text-gray-600 text-sm ml-1'>pcs</span>
          </>
        ) : (
          <>
            <span className='font-bold text-sm'>{score}</span>
            <span className='text-gray-600 text-sm ml-1'>%</span>
          </>
        )}
      </div>
    </div>
  );
};


export default IdicatorsList