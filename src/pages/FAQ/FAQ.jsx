import React from 'react'
import { Link } from 'react-router-dom'
import Footer from '../../Footer'
import Versprechen from '../../Versprechen'

function Faq() {
  return (
    <><section className="grid h-screen place-items-center bg-white text-black text-xl">
		  <div className="container flex flex-col items-center p-4 mx-auto md:p-8">
			  <h1 className="  mt-2 text-4xl leading-8 font-bold tracking-tight text-green-500 sm:text-7xl pb-15">Frequently Asked Questions</h1>

			  <div className="pt-20 flex flex-col w-full divide-y sm:flex-row text-2xl sm:divide-y-0 sm:divide-x sm:px-8 lg:px-12 xl:px-32 divide-gray-700">
				  <div className=" flex flex-col w-full text-2xl divide-y divide-gray-700">


					  <Link to="/faq/vserver"  className="flex items-center justify-center p-4 sm:py-8 lg:py-12">vServer</Link>
				  </div>
				  <div className="flex flex-col w-full divide-y divide-gray-700">

					  <Link to="/faq/gameserver" rel="noopener noreferrer" href="#" className="flex items-center justify-center p-4 sm:py-8 lg:py-12">Gameserver</Link>
				  </div>
				  <div className="flex flex-col w-full divide-y divide-gray-700">

					  <Link to="/faq/instanz" href="#" className="flex items-center justify-center text-xl p-4 sm:py-8 lg:py-12">Instanzserver</Link>
				  </div>
			  </div>
		  </div>
	  </section>
	
	  <div className=' pt-20 w-full sm:hidden  flex justify-between text-gray-font  bottom-0   '>
              <Footer />
             </div>
             <div className=' w-full  hidden md:inline  justify-between text-gray-font  bottom-0 absolute inset-x-0  h-0   '>
              <Footer />
             </div></>
	  
  )
}

export default Faq