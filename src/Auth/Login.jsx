import React from 'react'
import { useState ,useEffect} from 'react';
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom'
import swal from 'sweetalert'
axios.defaults.baseURL = "http://127.0.0.1:8000";
axios.defaults.headers.post['Accept']='application/json';
axios.defaults.headers.post['Content-Type']='application/json';





export default function Login() {

    const navigate=useNavigate();
    useEffect(() => {
    
        if (localStorage.getItem('auth_token')
        ) {
            navigate("/");
        }
        
        }, [])
    const [input, setinput] = useState({

     
        email:'',
        password:''
    })
    const handleinput=(e)=>{

        e.persist();
        setinput({...input,[e.target.name]:e.target.value})
    }
    
    const [error, seterror] = useState([]);

 const login= (e)=>{


        e.preventDefault();

      const data={

        email:input.email,
        password:input.password,


      }
       
        
   


        axios.get('/sanctum/csrf-cookie').then(response => {
          
         
     axios.post(`/api/login`,data).then(res => {

        if(res.data.status === 200){

            //save token in local storage
        
           localStorage.setItem('auth_token',res.data.token)
           localStorage.setItem('auth_name',res.data.username)
           swal('success',res.data.message,"success")
           //alert type,message,icon
          navigate('/')
        
        
        }
        else if(res.data.status === 401){
         swal("warning","bad credentials","warning");
         setinput({
             email:"",
             password:""


         });
        }
        
   else{

    seterror(res.data.validation_errors)
    console.log(error);            
   }

     });
        });
   
    }




  return (
<div className="flex justify-center mt-16">
<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col m-atuo">

    <form onSubmit={login}>

    <div className="mb-4">
      <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="username">
     Email
      </label>
      <input  
     
     name="email"
     onChange={handleinput}
       value={input.email}
       className="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker" id="email" type="email" placeholder="email"
     />

{error.email?   <span className="text-red-500">{`${error.email}*`}</span>

:
<p></p>
}
    </div>
    <div className="mb-6">
      <label className="block text-grey-darker text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input  id="password" type="password" placeholder="******************" 
 
 name="password"
 onChange={handleinput}
 value={input.password}
 className="shadow appearance-none border border-red rounded w-full py-2 px-3 text-grey-darker mb-3"

 />
{error.password?   <span className="text-red-500">{`${error.password}*`}</span>: <p></p> }    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-dark text-white font-bold py-2 px-4 rounded" type="submit">
        Sign In
      </button>
      <Link to="/forgot" className="inline-block align-baseline font-bold text-sm text-blue hover:text-blue-darker" href="#">
        Forgot Password?
      </Link>
    </div>
  
    </form>
   </div>
</div>
    
  )
}
