import React from 'react'

function Footer() {
  return (
    <footer class=" w-full text-white body-font bg-gray-900">
  <div class="w-full container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-100 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
      <a class="w-full flex title-font font-medium items-center md:justify-start justify-center text-gray-500">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-green-500 rounded-full" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
        </svg>
        <span class="ml-3  text-white text-xl">Tiel24.de</span>
      </a>
      <p class="mt-2 text-sm text-white">© 2022 Tiel24 — made by</p>
      <a class="mt-2 text-sm text-white" href="https://inexo.at">Alex | InexoAT</a>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font text-m font-medium text-gray-500 tracking-widest  mb-3">Produkte</h2>
        <nav class="list-none mb-10">
          <li>
            <a href="/Produkte/vServer" rel="noreferrer" class="text-white font-light hover:text-gray-500">vServer</a>
          </li>
          <li>
            <a href="/Produkte/Gameserver" rel="noreferrer" class="text-white font-light hover:text-gray-500">Gameserver</a>
          </li>
          <li>
            <a href="/Produkte/Instanzserver" rel="noreferrer" class="text-white font-light  hover:text-gray-500">Instanzserver</a>
          </li>
          
         
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font text-m font-medium text-gray-500 tracking-widest  mb-3">Rechtliches</h2>
        <nav class="list-none mb-10">
          <li>
            <a class="text-white font-light hover:text-gray-500" href="impressum" rel="noreferrer" >Impressum</a>
          </li>
          <li>
            <a class="text-white font-light hover:text-gray-500" href="Datenschutz" rel="noreferrer">Datenschutz</a>
          </li>
         
         
          
        </nav>
      </div>
      <div class=" md:w-1/2 w-full px-4">
        <h2 class="title-font text-m font-medium text-gray-500 tracking-widest  mb-3">Social Media</h2>
        <nav class="list-none mb-10">
        <li>
            <a class="text-white font-light hover:text-gray-500" href="https://twitter.com/tiel24de" rel="noreferrer" target="_blank">Twitter</a>
          </li>
          <li>
            <a class="text-white font-light hover:text-gray-500" href="https://www.instagram.com/tiel24.de/" rel="noreferrer" target="_blank">Instagram</a>
          </li>
          <li>
            <a class="text-white font-light hover:text-gray-500" href="https://discord.tiel24.de/" rel="noreferrer" target="_blank">Discord</a>
          </li>
          <li>
            <a class="text-white font-light hover:text-gray-500" href="https://tiktok.com/@tiel24.de"  rel="noreferrer" target="_blank">TikTok</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        
      </div>
    </div>
  </div>
  
</footer>
  )
}

export default Footer