import React, { useEffect,useState } from 'react'
import axios from 'axios'


export default function Chat() {
const [chats, setchats] = useState([])
const [admin, setadmin] = useState("");
   function getdata(params) {
    axios.get(`http://127.0.0.1:8000/api/chats`).then((response)=>{
      
        setchats(response.data);
        setadmin(chats.admin);
    
            
          })

   }

useEffect(() => {

  getdata();
}, [])
console.log(admin);
console.log('hi');
console.log(chats);
  return (
    <>
{
chats.map(({admin,name})=>{

return(
    <>
    <div>
    name:{name}
    <br />
   admin: {admin.name}
   <br />
   
</div>
    </>
)

})

}
    </>
  )
}
