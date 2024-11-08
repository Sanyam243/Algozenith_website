import './App.css'
import { Button } from '@/components/ui/button'
import Forums from './assets/Forums.png'
import Learn from './assets/Learn.png'
import Dashboard from './assets/Dashboard.png'
import Upskill from './assets/Upskill.png'
import Contest from './assets/Contest.png'
import Leaderboard from './assets/Leaderboard.png'

function App() {
  
  const menuList =[
    {
        id:1,
        name:'Dashboard',
        icon:Dashboard,
        

    },
    {
        id:2,
        name:'Learn',
        icon:Learn,
       
    },


    {
        id:3,
        name:'Forums',
        icon:Forums,
       
    },
    {
      id:4,
      name:'Upskill',
      icon:Upskill,
     
  },
  {
    id:5,
    name:'Contest',
    icon:Contest,
   
},
{
  id:6,
  name:'Leaderboard',
  icon:Leaderboard,
 
}

   
    

]

  return (
   
     
<div>
   

    
       <div className='h-screen bg-custom_blue  p-5  shadow-sm '>
      

        <div>
            {menuList.map((menu)=>(
              
                <h2 className='flex gap-5 mr-3 items-center font-abc text-sm p-5 px-9 cursor-pointer rounded-md
                mb-2 hover:font-semibold hover:bg-bg2' >
                    <img src ={menu.icon} width={20}/>
                    {menu.name}
                </h2>
               
            )) 

            }
        </div>
    </div>
 </div>

 
  )
}

export default App
