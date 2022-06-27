import React from 'react'
import {Link} from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert'
//import {useGlobalContext} from '../Context'

export default function Navbar() {

    //const { search,setsearch} = useGlobalContext();
    const navigate=useNavigate();
    const [showlinks, setshowlinks] = useState(false );   

   
          
 //log out functionality    
const logout=(e)=>{
e.preventDefault();

axios.post('/api/logout').then(res=>{
console.log(res);
    if(res.data.status === 200){
       
    localStorage.removeItem('auth_token')
    localStorage.removeItem('auth_name')
    swal('success',"logged out succesfully","success")
    //alert type,message,icon
   navigate('/')
 
    }
})

}

  return (

    <>
           <nav className="bg-gray-800 m-4">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <button type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" 
              aria-controls="mobile-menu" aria-expanded="false" onClick={()=>{setshowlinks(!showlinks)}}>
                <span className="sr-only">Open main menu</span>
           
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
         
                <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
              <p className="text-white">Employee managment</p>
                <p className="hidden lg:block h-8 w-auto" src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg" alt="Workflow" />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4">
                 
               
                       
                       <li className="list-none">
                       
{
!localStorage.getItem('auth_token')
?
<>
<Link className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium" aria-current="page" to="/login">Login</Link>

<Link className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium" aria-current="page" to="/signup">Signup</Link>
</>
:
<button className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium" onClick={logout}>Logout</button>

}

        

                       </li>
                       <li className="flex justify-end items-end float-right  content-end">
                           
             <div className="flex flex-end justify-end mr-96">
          


      
           
             
          </div></li>
                       
                   
           
              </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              
              <div className="ml-3 relative">
          
               
              </div>
            </div>
          </div>
        </div>
        {/* Mobile menu, show/hide based on menu state. */}

        {
          showlinks?<div className="sm:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
 {
!localStorage.getItem('auth_token')
?
<>
<Link className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium" aria-current="page" to="/login">Login</Link>

<Link className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium" aria-current="page" to="/signup">Signup</Link>
</>
:
<button className="text-gray-300 px-3 py-2 rounded-md text-sm font-medium"  onClick={logout}>Logout</button>

}

 
          </div>
        </div>:
        <div></div>


        }
        
      </nav> 
    </>


  )
}