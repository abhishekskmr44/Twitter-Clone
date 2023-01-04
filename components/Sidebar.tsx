import Image from 'next/image'
import React from 'react'
import SidebarMenuItem from './SidebarMenuItem'
import { BellIcon, BookmarkIcon, DotsCircleHorizontalIcon, DotsHorizontalIcon, HashtagIcon, HomeIcon, MailIcon, UserIcon, ViewListIcon } from "@heroicons/react/solid";


function Sidebar() {
  return (
    <div className="hidden sm:flex flex-col p-2 xl:items-start fixed h-full xl:ml-24">
      {/* Twitter Logo */}
      <div className="hoverEffect p-0 hover:bg-blue-100 xl:px-1">
          <Image width="50" height="50" src="https://help.twitter.com/content/dam/help-twitter/brand/logo.png" alt=""></Image>
      </div>


      {/* Menu */}
      <div className="mt-4 mb-2.5 xl:items-start">
      <SidebarMenuItem text="Home" Icon={HomeIcon} active/>
      <SidebarMenuItem text="Explore" Icon={HashtagIcon}/>
      <SidebarMenuItem text="Notifications" Icon={BellIcon}/>
      <SidebarMenuItem text="Messages" Icon={MailIcon}/>
      <SidebarMenuItem text="Bookmarks" Icon={BookmarkIcon}/>
      <SidebarMenuItem text="Lists" Icon={ViewListIcon}/>
      <SidebarMenuItem text="Profile" Icon={UserIcon}/>
      <SidebarMenuItem text="More" Icon={DotsCircleHorizontalIcon}/>
      </div>


      {/* Button */}

      <button className="bg-blue-400 text-white rounded-full w-56 h-12 font-bold shadow-md hover:brightness-95 text-lg hidden xl:inline">Tweet</button>


      {/* Mini-Profile */}

      <div className="hoverEffect text-gray-700 flex items-center justify-center xl:justify-start">
      <img src="https://i.imgur.com/GQg23On.jpeg" alt="user-img"
      className="h-10 w-10 rounded-full"
      />
      <div className="leading-5 hidden xl:line">
       <h4 className='font-bold'>Abhishek Sukumar</h4>
       <p className='text-gray-500'>abhishekskmr</p>
      </div>
    </div>
    <DotsHorizontalIcon className='h-5 xl:ml-8'/>
   </div>
  )
}

export default Sidebar