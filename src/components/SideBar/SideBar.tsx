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
        <TepMenu imgSrc="unChart" text="Line Management" textColor="text-tapMenuUnChoiseColor" />
        <TepMenu imgSrc="chart" text="Real-Time Prod." textColor="text-white" />
      </div>
      <div>
        <TepMenu imgSrc="Star" text="Master" textColor="text-white" />
        <TepMenu imgSrc="notifications" text="Threed" textColor="text-tapMenuUnChoiseColor" />
        <TepMenu imgSrc="logout" text="Log out" textColor="text-tapMenuUnChoiseColor" />
        <div className='my-10'>
          <Logo width="10" />
        </div>
      </div>
    </div>
  )
}

export default SideBar