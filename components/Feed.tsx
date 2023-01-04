import { SparklesIcon } from '@heroicons/react/solid'
import React from 'react'
import Input from './Input'
import Post from './Post'

export default function Feed() {

  const posts = [
    {
      id: "1",
      name: "Heramba Ganapati",
      userImg:"https://i.imgur.com/GQg23On.jpeg",
      img: "https://images.unsplash.com/photo-1504788363733-507549153474?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1167&q=80",
      text: "Everything changes, to something new to something strange.",
      timestamp:"2 hours ago",
    },
    {
      id: "2",
      name: "Heramba Ganapati",
      userImg:"https://i.imgur.com/GQg23On.jpeg",
      img: "https://images.unsplash.com/photo-1518802508264-76256089cddb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      text: "Everything changes, to something new to something strange.",
      timestamp:"2 days ago",
    },
  ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
     <div className="flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200">
      <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
        <div className="hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9">
        <SparklesIcon className="h-5"/>
      </div>
     </div>
     <Input/>
     {posts.map((post)=>(
      <Post key={post.id} post={post}/>
     ))}
      </div>
  )
}
