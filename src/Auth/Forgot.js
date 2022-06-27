import React from 'react'
import { useState } from 'react';
export default function Forgot() {
    const [email, setemail] = useState("");
    const handesubmit=(e)=>{
    e.preventDefault();
        console.log(email);
        setemail("");
    }
    return (
        <div className="flex justify-center mt-16">
        <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col m-atuo">
        
            <form  onSubmit={handesubmit}>
        
            <div className="mb-4">
              <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
             Email
              </label>
              <input  
             
             name="email"
             value={email}
             onChange={(e)=>{setemail(e.target.value)}}
               className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="email"
             />
        
       
            </div>
           
            <div className="flex items-center justify-between">
              <button className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="submit">
                Send Link
              </button>
              
            </div>
          
            </form>
           </div>
        </div>
            
          )
}
