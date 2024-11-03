import React from 'react'
import { Button } from '@/components/ui/button'
import { Calendar } from 'lucide-react'
import {BriefcaseBusiness} from 'lucide-react'
import { Info } from 'lucide-react'
import { Clock } from 'lucide-react'
import { Copy } from 'lucide-react'
import Contest from './assets/Contest.png'

import {SquareCode} from 'lucide-react'




function Centre() {
    const menuList =[
        {
            id:1,
            name:'Chapter 1',
           
            
    
        },
        {
            id:2,
            name:'Chapter 2',
            
           
        },
    
    
        {
            id:3,
            name:'Chapter 3',
          
           
        },
        {
          id:4,
          name:'Chapter 4',
       
         
      },
      {
        id:5,
        name:'Chapter 5',
       
       
    }
   
    
       
        
    
    ]

    const content =[
        {
            id:1,
            name:'Video 1',
            icon:SquareCode
           
            
    
        },
        {
            id:2,
            name:'Article 1',
            icon:SquareCode
            
           
        },
    
    
        {
            id:3,
            name:'Quiz 1',
            icon:SquareCode
          
           
        },
        {
          id:4,
          name:'Coding Exercise 1',
            icon:SquareCode
       
         
      },
      {
        id:5,
        name:'Combined Resource 1',
       icon:SquareCode
       
       
    }
   
    
       
        
    
    ]
  return (
    <div className='w-full border border-blue-300 rounded-lg'>
      <div className='p-5 shadow-sm border flex justify-between'>
        <div className='flex gap-2'>
        <Button> <Calendar/>  Mentor Sessions</Button>
       
<Button> <BriefcaseBusiness/> Learning Material</Button>
        </div>
   

    
        <Button> <Info/> How it works</Button>
     
    
    
      
     </div>


    <div className='flex border-blue-400 '>
    <div className='h-screen p-6  shadow-sm '>
            {menuList.map((menu)=>(
              
                <h2   className='flex gap-5 items-center font-small text-gray-500 p-5 cursor-pointer rounded-md
                mb-2 hover:text-primary hover:bg-blue-100' >
                   
                    {menu.name}
                </h2>
               
            )) 

            }
        </div>

        <div className='w-5/6'>
        <div className='p-5 shadow-sm  flex-col  gap-5 justify-between'>



        <div className="space-y-4 mb-5  shadow-sm rounded-lg border border-blue-500 w-full justify-between">
  <details className="group [&_summary::-webkit-details-marker]:hidden" open>
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4"
    >
        <div className='flex-col'>
        <h1 className='ml-0'>Part 1</h1>
        <h2>Dynammic Programming</h2>

        
<div className=" w-full mt-3 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div className="bg-blue-600 h-2.5 rounded-full"></div>
</div>

        </div>
     
<div>
            <div className='flex justify-between gap-2 mt-4'>
                <div className='flex gap-1'>
                <Clock/>
                2.00.00
                </div>
                <div className='flex gap-1'>
                <img src={Contest} />
                Medium
                </div>
                
                
                <div className='flex gap-1'>
                <Copy />
               5
                </div>
                <svg
        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>

      
               
                
            </div>
            <Button className='mt-2 '>45% Completed</Button>
            </div>

                
            
           
      
    </summary>

    <p className="mt-4 px-4 leading-relaxed text-gray-700">
    <div className=' p-8 border shadow-sm rounded-lg '>
            {content.map((menu)=>(
              <div className='flex justify-between border p-2'>
                
                <h2   className='flex gap-5 items-center font-bold text-black-500 p-5 cursor-pointer rounded-md
                mb-2 hover:text-primary hover:bg-blue-100' >
                   <menu.icon/>
                    {menu.name}
                </h2>
                <div className='flex items-center'></div>
                <Button color='blue' className='flex items-center'>
                    <Clock/>
                    10.00
                </Button>
                
                </div>
               
            )) 

            }
        </div>
       

    </p>
  </details>

  
</div>

<div className="space-y-4  shadow-sm rounded-lg border border-blue-500 w-full justify-between">
  <details className="group [&_summary::-webkit-details-marker]:hidden" open>
    <summary
      className="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-gray-50 p-4"
    >
        <div className='flex-col'>
        <h1 className='ml-0'>Part 2</h1>
        <h2>Shortest Path Algorithms</h2>

        
<div className=" w-full mt-3 bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div className="bg-blue-600 h-2.5 rounded-full"></div>
</div>

        </div>
     
<div>
            <div className='flex justify-between gap-2 mt-4'>
                <div className='flex gap-1'>
                <Clock/>
                2.00.00
                </div>
                <div className='flex gap-1'>
                <img src={Contest} />
                Medium
                </div>
                
                
                <div className='flex gap-1'>
                <Copy />
               4
                </div>
                <svg
        className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
      </svg>

      
               
                
            </div>
            <Button className='mt-2 '>20% Completed</Button>
            </div>

                
            
           
      
    </summary>

    <p className="mt-4 px-4 leading-relaxed text-gray-700">
    <div className=' p-8 border shadow-sm rounded-lg '>
            {content.map((menu)=>(
              <div className='flex justify-between border p-2'>
                
                <h2   className='flex gap-5 items-center font-bold text-black-500 p-5 cursor-pointer rounded-md
                mb-2 hover:text-primary hover:bg-blue-100' >
                   <menu.icon/>
                    {menu.name}
                </h2>
                <div className='flex items-center'></div>
                <Button color='blue' className='flex items-center'>
                    <Clock/>
                    10.00
                </Button>
                
                </div>
               
            )) 

            }
        </div>
       

    </p>
  </details>

  
</div>
        
        </div>
   

    
        
     
    
    
      
     
        </div>

      

    </div>

     
    </div>
    
  )
}

export default Centre
