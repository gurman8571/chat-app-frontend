import React from 'react'
export default function Pagination({postperpage,posts}) {
  
const pagenumber=[];
    for (let i = 1; i <= Math.ceil(posts/postperpage); i++) {
        pagenumber.push( i);
        
    }
  
    return (
    <>
    {
            pagenumber.map(number=>{

         <div key={number}>


            <p className="text-gray-900"> {number}</p> 
            
         </div>
            })

    }
    
    </>
  )
}
