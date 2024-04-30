import React from 'react'

interface BestUserType {
  number: string;
  title: string;
  info1: string;
  info2: string;
  info3: string;
  info4: string;
  name: string;
  imgUrl: string;
}

const BestUser = ({ number, title, info1, info2, info3, info4, name, imgUrl }: BestUserType) => {
  return (
    <div className='w-[564px] h-[120px] rounded-lg border border-gray-200 flex items-center justify-center gap-10'>
      <img className='w-8' src="images/Left.svg" alt="Left" />
      <div className='flex flex-col justify-center gap-1'>
        <div className='w-10 bg-gray-200 rounded-lg'>
          <p className='text-gray-700 '>{number}</p>
        </div>
        <p className='font-bold'>{title}</p>
        <div className='flex gap-3'>
          <p className="text-gray-400 text-sm relative">
            <span className="before:absolute before:right-[-5px] before:top-[6px] before:h-2 before:w-[1px] before:bg-gray-400" />
            {info1}
          </p>
          <p className="text-gray-400 text-sm relative">
            <span className="before:absolute before:right-[-5px] before:top-[6px] before:h-2 before:w-[1px] before:bg-gray-400" />
            {info2}
          </p>
          <p className="text-gray-400 text-sm relative">
            <span className="before:absolute before:right-[-5px] before:top-[6px] before:h-2 before:w-[1px] before:bg-gray-400" />
            {info3}
          </p>
          <p className="text-gray-400 text-sm">
            {info4}
          </p>

        </div>
      </div>
      <div className='flex flex-col justify-center items-center gap-1'>
        <img src={`images/${imgUrl}.png`} alt="userimg" />
        <span className=' text-gray-700'>{name}</span>
      </div>
      <img className='w-8' src="images/Right.svg" alt="Left" />
    </div>

  )
}

export default BestUser