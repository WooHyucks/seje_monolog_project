import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

type TapMenu = {
  imgSrc: string;
  text: string;
  textColor: string;
}

const TapMenu = ({ imgSrc, text, textColor }: TapMenu) => {
  return (
    <div className='flex items-center gap-2 mt-4'>
      <img src={`/images/${imgSrc}.svg`} alt="" />
      <span className={`${textColor}`}>{text}</span>
    </div>
  )
}

export default TapMenu