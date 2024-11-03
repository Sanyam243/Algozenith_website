import React from 'react'
import Menu from './assets/Menu.png'
import Bell from './assets/Bell_icon.png'
function Header() {
  return (
    <div>
       <div className='p-5 shadow-sm border flex justify-between font-outlier'>
    <span className='flex p-1 text-1xl font-extrabold sm:text-2xl gap-2 '>
      <img src={Menu} />
        Algozenith
            </span>
    <div className=''></div>
     <div className='flex justify-between gap-4'>

    <img src={Bell} className='max-w-20' />
     
     
    
    
      
     </div>

    </div>
    </div>
  )
}

export default Header
