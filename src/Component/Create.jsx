import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';



function Create() {

   const [name, setName] = useState('');
   const [age, setAge] = useState('');
   const [email, setEmail] = useState('');
  const navigate =  useNavigate();

   const handleSubmit = (e) =>{
      e.preventDefault();
      axios.post('https://64878e7fbeba62972790ce3b.mockapi.io/swaticurd',{
         e_name:name,
         e_age:age,
         e_email:email
      }).then(() =>{
        navigate("/");
      })

   }
   return (
      <div className=' flex flex-wrap' >
         <div className='md:w-1/3 pr-4 pl-4'>
            <div className='mt-5 '>
            <div className=' mb-3 mt-3  px-3 rounded-lg'>
         < Link to='/'>
         <button className=' bg-blue-600 px-3 py-3 rounded-md   '>Create New Data</button>
         </Link>
        </div>
           
               <form onSubmit={handleSubmit}>
                  <div className=' bg-blue-600 p-4 text-center'>
                     <h1>Create Data</h1>
                  </div>
                  <div>
  <div className="mb-6">
    <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
     Enter Name
    </label>
    <input type="text" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg"  onChange={(e) => setName(e.target.value)}/>
  </div>
  <div className="mb-6">
    <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
     Enter AGE
    </label>
    <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 dark:placeholder-gray-400 dark:text-white  "
     onChange={(e) => setAge(e.target.value)} />
  </div>
  <div>
    <label
     
      className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
    >
    Enter Email
    </label>
    <input type="text" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg   "  onChange={(e) => setEmail(e.target.value)}/>
  </div>
</div>
                 <div className=' py-10'>
                 <input className=' w-full  bg-blue-600 text-white py-2 px-4 rounded-lg' value='submit' type="Submit" />
                 </div>
               </form>

               {name}
               {age}
               {email}
            </div>
         </div>
      </div>
   )
}

export default Create;
