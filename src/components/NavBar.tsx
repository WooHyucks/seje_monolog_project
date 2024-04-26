import React from 'react'

type NavBarType = {
  text: string
}

const NavBar = ({ text }: NavBarType) => {
  return (
    <div className='text-left bg-white p-4 border-b-[2px] w-[1500px]' style={{ boxShadow: "3px NavShadow" }}>
      <span className='font-bold text-lg'>{text}</span>
    </div>
  )
}

export default NavBar