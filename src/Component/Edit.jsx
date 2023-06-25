// import React, { useEffect, useState } from 'react'
// import { Link } from 'react-router-dom'

// function Edit() {

//     const [id, setId]  = useState(0);
//     const [name, setName] = useState(0);
//     const [age, setAge] = useState(0);
//     const [email, setEmail] = useState(0);

//     useEffect(() =>{
//   setId (localStorage.getItem('id'));
//   setName(localStorage.getItem('name'));
//         setAge(localStorage.getItem('age'));
//         setEmail(localStorage.getItem('email'));
//     },[])
//   return (
//     <div>
//          <div className=' flex flex-wrap' >
//          <div className='md:w-1/3 pr-4 pl-4'>
//             <div className='mt-5 '>
//             <div className=' mb-3 mt-3  px-3 rounded-lg'>
//          < Link to='/'>
//          <button className=' bg-blue-600 px-3 py-3 rounded-md   '>Update New Data</button>
//          </Link>
//         </div>
           
//                <form >
//                   <div className=' bg-blue-600 p-4 text-center'>
//                      <h1>Update  Data</h1>
//                   </div>
//                   <div>
//   <div className="mb-6">
//     <label  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//      Enter Name
//     </label>
//     <input type="text" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg"  />
//   </div>
//   <div className="mb-6">
//     <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
//      Enter AGE
//     </label>
//     <input type="text" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg   block w-full p-2.5 dark:placeholder-gray-400 dark:text-white  "
//       />
//   </div>
//   <div>
//     <label
     
//       className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
//     >
//     Enter Email
//     </label>
//     <input type="text" className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg   "  />
//   </div>
// </div>
//                  <div className=' py-10'>
//                  <input className=' w-full  bg-blue-600 text-white py-2 px-4 rounded-lg' value='Update' type="Submit" />
//                  </div>
//                </form>

              
//             </div>
//          </div>
//       </div>
//     </div>
//   )
// }

// export default Edit






import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
function Edit() {

    const [id, setId] = useState(0);
    const [name, setName] = useState(0);
    const [age, setAge] = useState(0);
    const [email, setEmail] = useState(0);
    const navigate= useNavigate();

      useEffect(() =>{
        setId(localStorage.getItem('id'));
        setName(localStorage.getItem('name'));
        setAge(localStorage.getItem('age'));
        setEmail(localStorage.getItem('email'));
      }, [])


      const handleUpdate = (e) =>{
        e.preventDefault();
        
        axios.put(`https://64878e7fbeba62972790ce3b.mockapi.io/swaticurd/${id}`,{
            e_name: name,
            e_age: age,
            e_email: email
       }).then(()=> {
         navigate('/');
       })
      }

      return (
    <>
   <div className=' flex flex-wrap'>
   <div className='md:w-1/3 pr-4 pl-4'>


   <div className='  mb-auto  mt-5'>
               <Link to='/'>
               <button className= ' bg-blue-700 text-white py-1 p-4 m-3 px-2 rounded-md'>
                   Read Data
                </button>
               </Link>
            </div>
    <div className=' bg-blue-600 p-4 text-center'>
    <h1>Update Data</h1>
    </div>
    <form onSubmit={handleUpdate} >

        <div className='mb-4  justify-center'>
            <label>Enter Name</label>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Name' className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded' />

        </div>


        <div className='mb-4'>
            <label>Enter Age</label>
            <input type="text" value={age} onChange={(e) => setAge(e.target.value)} placeholder='Age' className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded' />

        </div>

        <div className='mb-4'>
            <label>Enter Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  placeholder='Enter Email' className='block appearance-none w-full py-1 px-2 mb-1 text-base leading-normal bg-white text-gray-800 border border-gray-200 rounded' />

        </div>

       <div className='  grid-column: span 4 / span 4; '>
       <input className=" w-full  bg-blue-600 text-white py-2 px-4 rounded-lg " type="submit" value='Update' />
       </div>
    </form>
    

   </div>
   </div>
   </>
  )
}

export default Edit;