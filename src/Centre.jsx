import React from 'react'
import { Button } from '@/components/ui/button'
import { Calendar, CircleHelp } from 'lucide-react'
import {BriefcaseBusiness} from 'lucide-react'
import { Info } from 'lucide-react'
import { Clock } from 'lucide-react'
import { Copy } from 'lucide-react'
import Contest from './assets/Contest.png'
import { FileVideo } from 'lucide-react'
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
            icon:FileVideo
           
            
    
        },
        {
            id:2,
            name:'Article 1',
            icon:CircleHelp
            
           
        },
    
    
        {
            id:3,
            name:'Quiz 1',
            icon:CircleHelp
          
           
        },
        {
          id:4,
          name:'Coding Exercise 1',
            icon:SquareCode
       
         
      },
      {
        id:5,
        name:'Combined Resource 1',
       icon:Copy
       
       
    }
   
    
       
        
    
    ]
  return (
    <div className='w-full  font-abc border border-bordercolor rounded-lg'>
      <div className='p-5 shadow-sm  flex justify-between font-inter'>
        <div className='flex gap-2  bg-bg1 p-3'>
        <Button className='rounded-lg'> <Calendar/>  Mentor Sessions</Button>
       
<Button className='shadow-lg border-bordercolor rounded-lg'> <BriefcaseBusiness/> Learning Material</Button>
        </div>
   

    
        <Button className='border-bg2'> <Info/> How it works</Button>
     
    
    
      
     </div>


    <div className='flex '>
    <div className="w-1/4 bg-white p-4  ">
      
      <ul>
        {["Chapter 1", "Chapter 2", "Chapter 3", "Chapter 4", "Chapter 5"].map((chapter, index) => (
          <li key={index} className={`p-2 ${index === 0 ? "bg-blue-50  cursor-pointer rounded-lg  font-semibold " : "  cursor-pointer mt-5 border-b border-bg2"}`}>
            <div className='flex justify-between'>
            {chapter} <span className={`${index === 0 ? "text-sm text-text1" :"hidden"}`}><div className='flex items-center gap-1'><Clock width={20}/> 05:00:00</div></span>
            </div>
           
          </li>
        ))}
      </ul>
    </div>

        <div className='w-5/6 '>
        <div className='p-1 shadow-sm  flex-col  gap-5 justify-between'>



        <div className=" mb-5  shadow-sm rounded-lg border border-bordercolor w-full justify-between">
  <details className="group [&_summary::-webkit-details-marker]:hidden" open>
    <summary
      className="flex cursor-pointer  justify-between gap-1.5 rounded-lg  p-4"
    >
       <span>
       <h1 className='text-progress_bar text-left'>PART 1</h1>
       <h2 className='font-bold'>Dynamic Programming</h2>
       </span>
       

        




      
        
     
<div>

            <div className='flex justify-between gap-2 mt-2'>
            <div className='flex gap-2 text-itemcolor text-sm'>
                <Clock className='text-itemcolor w-5'/>
                2.00.00
                </div>
                <div className='flex gap-2 text-itemcolor text-sm'>
                <img src={Contest}  width={20} className='text-itemcolor' />
                Medium
                </div>
                
                
                <div className='flex gap-2 text-itemcolor text-sm'>
                <Copy className='text-itemcolor w-5' />
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
           
            <Button className='mt-2 ml-auto h-4 bg-bg1 border border-bg2 text-sm '>45% Completed</Button>
           
            
            </div>

           
                
            
           
      
    </summary>
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div className="bg-progress_bar h-2.5 rounded-full" style={{ width: '45%' }}></div>
</div>


    
    <div className=' p-8  shadow-lg rounded-lg '>
            {content.map((menu)=>(
              <div className='flex justify-between border-b items-center   '>
                
                <h2   className='flex gap-5 items-center font-abc font-bold text-sm p-5 px-9 cursor-pointer rounded-md
                mb-2  hover:bg-bg2' >
                   <menu.icon className='text-itemcolor text-sm'/>
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
       

    
  </details>

  
</div>

<div className=" mb-5  shadow-sm rounded-lg border border-bordercolor w-full justify-between">
  <details className="group [&_summary::-webkit-details-marker]:hidden" open>
    <summary
      className="flex cursor-pointer  justify-between gap-1.5 rounded-lg  p-4"
    >
       <span>
       <h1 className='text-progress_bar text-left'>PART 2</h1>
       <h2 className='font-bold'>Lorem ipsum dolor sit </h2>
       </span>
       

        




      
        
     
<div>

            <div className='flex justify-between gap-2 mt-2'>
            <div className='flex gap-2 text-itemcolor text-sm'>
                <Clock className='text-itemcolor w-5'/>
                2.00.00
                </div>
                <div className='flex gap-2 text-itemcolor text-sm'>
                <img src={Contest}  width={20} className='text-itemcolor' />
                Hard
                </div>
                
                
                <div className='flex gap-2 text-itemcolor text-sm'>
                <Copy className='text-itemcolor w-5' />
               12
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
           
            <Button className='mt-2 ml-auto h-4 bg-bg1 border border-bg2 text-sm '>20% Completed</Button>
           
            
            </div>

           
                
            
           
      
    </summary>
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
  <div className="bg-progress_bar h-2.5 rounded-full" style={{ width: '20%' }}></div>
</div>


    
    <div className=' p-8  shadow-lg rounded-lg '>
            {content.map((menu)=>(
              <div className='flex justify-between border-b items-center   '>
                
                <h2   className='flex gap-5 items-center font-abc font-bold text-sm p-5 px-9 cursor-pointer rounded-md
                mb-2  hover:bg-bg2' >
                   <menu.icon className='text-itemcolor text-sm'/>
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
       

    
  </details>

  
</div>
        
        </div>
   

    
        
     
    
    
      
     
        </div>

      

    </div>

     
    </div>
    
  )
}

export default Centre
