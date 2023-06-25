import axios from 'axios'
import React, { useEffect } from 'react'
//step3
import { useState } from 'react';
//3
import { Link } from 'react-router-dom';

function Read() {

 const [apiData, setApiData] =   useState([])
//  step 2
    function getData() {
        axios.get('https://64878e7fbeba62972790ce3b.mockapi.io/swaticurd')
            .then((Response) =>{
                
               setApiData(Response.data);
            })
    }
     function handleDelete(id){
      axios.delete(`https://64878e7fbeba62972790ce3b.mockapi.io/swaticurd/${id}`)
      .then(() =>{
        getData();
      })
     }

   function  setDataToStorage(id, name, age,email){
    localStorage.setItem('id',id)
    localStorage.setItem('name',name)
    localStorage.setItem('age',age)
    localStorage.setItem('email',email)
   }
    //2

    //3
  useEffect(() =>{
    getData();
  }, [])
  //3
  return (
    <div className=' flex justify-center'>
        {/* step 5 */}
        <div className=' mb-3 mt-3  px-3 rounded-lg'>
         < Link to='/Create'>
         <button className=' bg-cyan-900  px-3 py-3 rounded-md   '>Create New Data</button>
         </Link>
         {/* 5 */}
        </div>
{/* step1 */}
        <div className=' p-5 h-screen bg-slate-200'>
        <table className=' bg-gray-50 border-gray-200 border-b-2 '>
                 <thead>
                    <tr className=' bg-white'>
                    <th className=' py-3 bg-cyan-800'>ID</th>
            <th className=' p-3 text-sm font-semibold  tracking-wide text-left py-3 bg-cyan-800'>NAME</th>
            <th className=' p-3 text-sm font-semibold  tracking-wide text-left py-3 bg-cyan-800'>AGE</th>
            <th className=' p-3 text-sm font-semibold  tracking-wide text-left py-3 bg-cyan-800'>EMAIL</th>
            <th className=' p-3 text-sm font-semibold  tracking-wide text-left py-3 bg-cyan-800'>EDIT</th>
            <th className=' p-3 text-sm font-semibold  tracking-wide text-left py-3 bg-cyan-800'>DELETE</th>
            {/* 1*/}
                    </tr> 

                     
                 </thead>

              <tbody>
              
                      {/* step4  */}
                   {
                    apiData.map((item)=>{
                        return(
                            <>
                            <tr>
                            <td className=' py-3 px-6 '>{item.id}</td>
            <td className=' py-3 px-6 '>{item.e_name}</td>
            <td className=' py-3 px-6 '>{item.e_age}</td>
            <td className=' py-3 px-6 '>{item.e_email}</td>
            {/* 4 */}
           <Link to='/Edit'>
           <button onClick={() => setDataToStorage(item.id, item.e_name, item.e_age, item.e_email)} className= ' bg-slate-400 py-1 p-4 m-3 px-2 rounded-md '>
                 EDIT
            </button>
           </Link>
            <td>
            <button onClick={() =>{ if(window.confirm('are you sure to delete??')){item.id}}} className='  bg-slate-400 py-1 p-4 m-3 px-2 rounded-md '>
                    DELETE
                </button>
            </td>

                            </tr>
                            </>
                        )
                    })
                   } 
              </tbody>
                </table>
        </div>
    </div>
  )
}

export default Read