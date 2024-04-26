import React, { useEffect, useState } from 'react'
import { getData } from '../../apis/apis';

interface UserDataType {
  id: number;
  name: string;
  role: string;
  email: string;
  imageUrl: string
}


const UserInfo = () => {
  const [userData, setUserData] = useState<UserDataType[]>([])

  useEffect(() => {
    getData("UserInfo")
      .then((data) => {
        setUserData(data);
      })
      .catch((error) => {
        console.error("User Data 데이터 불러오기 실패: ", error);
      });
  }, []);

  const truncate = (str: string, n: number) => {
    return str?.length > n ? str.substring(0, n) + "..." : str;
  };

  return (
    <div className='bg-userinfoBgColor w-[169px] h-[138px] rounded-lg'>
      {userData.map((data) => (
        <div className='flex flex-col justify-center items-center' key={data.id}>
          <img className='my-3 w-[40px] rounded-full' src={`/images/${data.imageUrl}.png`} alt={data.name} />
          <span className='font-bold text-white' >{data.name}</span>
          <span className='text-sm text-userInfoTextColor'>{data.role}</span>
          <span className='text-sm text-white'>{truncate(data.email, 16)}</span>
        </div>
      ))}
    </div>
  )
}

export default UserInfo
