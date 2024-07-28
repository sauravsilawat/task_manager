import React from 'react'
import Image from "next/image";

import { RxDoubleArrowRight } from "react-icons/rx";
import { TfiHome } from "react-icons/tfi";
import { AiFillPlusCircle } from "react-icons/ai";
import { CiViewBoard, CiSettings } from "react-icons/ci";
import { IoPeopleOutline } from "react-icons/io5";
import { PiChartLineLight, PiBellThin, PiSun } from "react-icons/pi";

import profile from "../asset/profile.png"

export default function Sidebar() {
  return (
    <div className="w-[15%] h-screen p-4">

      <div className='flex gap-2'>
        <div className='w-5] h-5'>
          <Image src={profile} alt="Profile" layout="responsive" />
        </div>
        <h1>Joe Gardner</h1>
      </div>

      <div className='flex justify-between my-4 text-gray-600 items-center'>
        <span className='flex gap-4 items-center justify-center'>
          <PiBellThin size={20} />
          <PiSun size={20} />
          <RxDoubleArrowRight size={20} />
        </span>
        <h1 className='bg-[#F4F4F4] p-2 rounded text-sm'>Logout</h1>
      </div>

      <div className='bg-[#F4F4F4] cursor-pointer flex gap-2 items-center p-2 rounded text-gray-600'>
        <TfiHome size={20} />
        <h1>Home</h1>
      </div>
      <div className='flex gap-2 items-center p-2 rounded text-gray-600'>
        <CiViewBoard size={20} />
        <h1 className='cursor-pointer'>Boards</h1>
      </div>
      <div className='flex gap-2 items-center p-2 rounded text-gray-600'>
        <CiSettings size={20} />
        <h1 className='cursor-pointer'>Settings</h1>
      </div>
      <div className='flex gap-2 items-center p-2 rounded text-gray-600'>
        <IoPeopleOutline size={20} />
        <h1 className='cursor-pointer'>Teams</h1>
      </div>
      <div className='flex gap-2 items-center p-2 rounded text-gray-600'>
        <PiChartLineLight size={20} />
        <h1 className='cursor-pointer'>Analytics</h1>
      </div>

      <div className='bg-[#352593] cursor-pointer flex items-center justify-center gap-2 text-white py-3 rounded-lg mt-2'>
        <h1 className='font-medium'>Create new task</h1>
        <AiFillPlusCircle size={20}/>
      </div>




    </div>
  )
}
