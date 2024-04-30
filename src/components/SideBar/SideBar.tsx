import React from 'react'
import UserInfo from './UserInfo'
import TepMenu from './TapMenu'
import Logo from '../Logo'

const SideBar = () => {
  return (
    <div className='w-[201px] h-[1080px] bg-sidebarBgColor px-4 flex flex-col justify-between'>
      <div>
        <div className='py-2'>
          <img className='w-7 ml-auto' src="/images/withdrawal.svg" alt="withdrawal" />
        </div>
        <UserInfo />
        <TepMenu imgSrc="unchart" text="Line Management" textColor="text-tapMenuUnChoiseColor" />
        <TepMenu imgSrc="chart" text="Real-Time Prod." textColor="text-white" />
      </div>
      <div className='flex flex-col justify-center'>
        <div className='text-left'>
          <TepMenu imgSrc="star" text="Master" textColor="text-white" />
          <TepMenu imgSrc="notifications" text="Threed" textColor="text-tapMenuUnChoiseColor" />
          <TepMenu imgSrc="logout" text="Log out" textColor="text-tapMenuUnChoiseColor" />
        </div>
        <div className='mb-9 mt-12 mx-2'>
          <Logo width="170" />
        </div>
      </div>
    </div>
  )
}

export default SideBar