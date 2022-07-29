import React from 'react'
import {
 
  SpeakerphoneIcon,
} from '@heroicons/react/outline'

function Banner() {
  return (
    <div className=" shadow-2xl bg-green-500 text-2xl">
      <div className="max-w-7xl mx-auto py-12  ">
        <div className="flex items-center justify-between flex-wrap">
          <div className="pl-2 w-0 flex-1 flex items-center">
            <span className="flex p-2 rounded-lg bg-green-800">
              <SpeakerphoneIcon className="h-6 w-6 text-white" aria-hidden="true" />
            </span>
            <p className="  text-white truncate">
            <span className=" pl-2 font-bold md:hidden text-base">Möchtest auch Du gesponsort werden?<br  /></span>
            <span className=" pl-2 font-bold md:hidden text-base">Tritt unserem Discord bei!</span>
              
              <span className=" pl-4 text-4xl font-bold hidden md:inline">Möchtest auch Du gesponsort werden? Tritt unserem Discord bei!</span>
            </p>
          </div>
          <div className="pl-4 p-8 order-3 mt-2 flex-shrink-0  w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="https://discord.tiel24.de/"
              className="p-4 md:hidden flex items-center justify-center px-8 py-4 border border-transparent rounded-md shadow-sm text-base font-medium text-green-600 bg-white hover:bg-green-50"
            >
             Discord
            </a>
          </div>
          <div className="order-3 mt-2 max-w-xs flex-shrink-0 w-full sm:order-2 sm:mt-0 sm:w-auto">
            <a
              href="https://discord.tiel24.de/"
              className="hidden md:inline max-w-xs flex items-center justify-center px-8 py-4 border border-transparent rounded-md shadow-sm text-base font-medium text-green-600 bg-white hover:bg-green-50"
            >
             Discord
            </a>
          </div>
          
            <button
              type="button"
              className="-mr-1 flex p-2 rounded-md hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2"
            >
             
             
            </button>
          </div>
        </div>
      </div>
    
  )
}

export default Banner