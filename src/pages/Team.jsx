import React from 'react'
import Footer from '../Footer'

function Team() {
  return (
  <>
 
<section class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12 ">
    <div class="text-center pb-12 ">
        
        <h1 class="mt-2 text-5xl leading-8 font-extrabold tracking-tight text-green-500 sm:text-4xl">
            Das Team
        </h1>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
               
                <input class="cursor-default  object-center object-cover rounded-full h-36 w-36" type="image" img src = {'https://cdn.discordapp.com/avatars/427491966285250570/4490c732a13a717e85339d666b2e82be.png?size=4096'} alt="photo" />
            </div>
            <div class="text-center">
                <p class="text-xl text-gray-700 font-bold mb-2 ">Elias</p>
                <p class="text-base text-gray-400 font-normal">Inhaber</p>
            </div>
        </div>
        <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
              
                <input class="cursor-default object-center object-cover rounded-full h-36 w-36" type="image" img src = {'https://cdn.discordapp.com/avatars/989438135492554832/982dc0b6510f85ce56f9cd6ff2edc3ed.png?size=4096'} alt="photo" />
            </div>
            <div class="text-center">
                <p class="text-xl text-gray-700 font-bold mb-2">Tim</p>
                <p class="text-base text-gray-400 font-normal">Inhaber</p>
            </div>
            
        </div>
        <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
                
                <input class="cursor-default object-center object-cover rounded-full h-36 w-36" type="image" img src = {'https://cdn.discordapp.com/avatars/809376529422221343/8580226c78a61f1489e2100e3e242f60.png?size=4096'} alt="photo" />
            </div>
            <div class="text-center">
                <p class="text-xl text-gray-700 font-bold mb-2">Nico</p>
                <p class="text-base text-gray-400 font-normal">2nd Level Supporter</p>
            </div>
        </div>
        <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
              
                <input class="cursor-default object-center object-cover rounded-full h-36 w-36" type="image" img src = {'https://cdn.discordapp.com/avatars/612032835225911325/14b6276ec01b89684f2ebc9d9c182be3.png?size=4096'} alt="photo" />
            </div>
            <div class="text-center">
                <p class="text-xl text-gray-700 font-bold mb-2">Amazee</p>
                <p class="text-base text-gray-400 font-normal">1st Level Supporter</p>
            </div>
        </div>
        <div class="w-full bg-white rounded-lg p-12 flex flex-col justify-center items-center">
            <div class="mb-8">
              
                <input class="cursor-default object-center object-cover rounded-full h-36 w-36" type="image" img src = {'https://cdn.discordapp.com/avatars/542030236641132544/a_80aa769cf440816023ca51a62c3393f9.gif?size=4096'} alt="photo" />
            </div>
            <div class="text-center">
                <p class="text-xl text-gray-700 font-bold mb-2">LucDev</p>
                <p class="text-base text-gray-400 font-normal">Community Manager</p>
            </div>
        </div>
        
    </div>
</section>
<div className='w-full grid bottom-0 right-0'>
   <Footer/> 
</div>
</>

  )
}

export default Team