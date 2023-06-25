// //create

// // import React, { useState } from 'react'

// // function Home() {

// //   const [inputs,setInputs] = useState({
// //     name: "",
// //     email: "",
// //   });
// //   const handleChange=(e) =>{
// //     setInputs({
// //         ...inputs,
// //         [e.target.name]:e.target.value,
// //     });
// //   };
// //   const handleSubmit=(e) =>{
// //     e.preventDefault()
// //     console.log('inputs',inputs);
// //   }
// //   return (
// //     <div className=' py-5 min-h-screen bg-[#004b43]'>
// //         <h1 className=' text-center  font-bold text-white '>Crud App</h1>
// //         <div className=' bg-[#e5e5e5] max-w-fit  m-auto p-10'>
// //             <form onSubmit={handleSubmit} >
// //                 <div className='  flex flex-col'>
// //                     <label>Name</label>
// //                     <input
// //                      name='name'
// //                      value={inputs.name}
// //                     onChange={handleChange}
// //                      />
// //                 </div>
// //                 <div className='  flex flex-col'>
// //                     <label>Email</label>
// //                     <input
// //                      name='email'
// //                      value={inputs.email}
// //                     onChange={handleChange}
// //                     />
// //                 </div>

// //                 <button type='submit' className=' w-full bg-[#014b64] text-white mt-4'>Add{""}</button>
// //             </form>
// //         </div>
// //     </div>
// //   )
// // }

// // export default Home



// //Read
// import React, { useState } from 'react'

// function Home() {

//   const [inputs,setInputs] = useState({
//     name: "",
//     email: "",
//   });
//   const [tableData,setTableData] = useState([])

//   const handleChange=(e) =>{
//     setInputs({
//         ...inputs,
//         [e.target.name]:e.target.value,
//     });
//   };
//   const handleSubmit=(e) =>{
//     e.preventDefault()
//     // console.log('inputs',inputs);
//     setTableData([...tableData,inputs]);
//     setInputs(
//         {
//             name:"",
//             email:""
//         }
//     )
//   };
//   return (
//     <div className=' py-5 min-h-screen bg-[#004b43]'>
//         <h1 className=' text-center  font-bold text-white '>Crud App</h1>
//         <div className=' bg-[#e5e5e5] max-w-fit  m-auto p-10'>
//             <form onSubmit={handleSubmit} >
//                 <div className='  flex flex-col'>
//                     <label>Name</label>
//                     <input
//                      name='name'
//                      value={inputs.name}
//                     onChange={handleChange}
//                      />
//                 </div>
//                 <div className='  flex flex-col'>
//                     <label>Email</label>
//                     <input
//                      name='email'
//                      value={inputs.email}
//                     onChange={handleChange}
//                     />
//                 </div>

//                 <button type='submit' className=' w-full bg-[#014b64] text-white mt-4'>Add{""}</button>
//             </form>
//         </div>
//         <div>
//             <table className=' w-full text-center'>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         tableData.map((item) =>(
//                             <tr>
//                                 <td>{item.name}</td>
//                                 <td>{item.email}</td>
//                                 <td>
//                                     <button className=' mr-3 text-pink-500'>Edit</button>
//                                     <button className=' text-yellow-500'>Delete</button>
//                                 </td>
//                             </tr>
//                         ))

                        
//                     }
//                 </tbody>
//             </table>
//         </div>
//     </div>
//   )
// }

// export default Home








//Delete
// import React, { useState } from 'react'

// function Home() {

//   const [inputs,setInputs] = useState({
//     name: "",
//     email: "",
//   });
//   const [tableData,setTableData] = useState([])

//   const handleChange=(e) =>{
//     setInputs({
//         ...inputs,
//         [e.target.name]:e.target.value,
//     });
//   };
//   const handleSubmit=(e) =>{
//     e.preventDefault()
    
//     setTableData([...tableData,inputs]);
//     setInputs(
//         {
//             name:"",
//             email:""
//         }
//     )
//   };
//   const handleDelete = (index) => {
//     const filterData = tableData.filter((item,i) => i !== index);
//     setTableData(filterData);
//   };
//   return (
//     <div className=' py-5 min-h-screen bg-[#004b43]'>
//         <h1 className=' text-center  font-bold text-white '>Crud App</h1>
//         <div className=' bg-[#e5e5e5] max-w-fit  m-auto p-10'>
//             <form onSubmit={handleSubmit} >
//                 <div className='  flex flex-col'>
//                     <label>Name</label>
//                     <input
//                      name='name'
//                      value={inputs.name}
//                     onChange={handleChange}
//                      />
//                 </div>
//                 <div className='  flex flex-col'>
//                     <label>Email</label>
//                     <input
//                      name='email'
//                      value={inputs.email}
//                     onChange={handleChange}
//                     />
//                 </div>

//                 <button type='submit' className=' w-full bg-[#014b64] text-white mt-4'>Add{""}</button>
//             </form>
//         </div>
//         <div>
//             <table className=' w-full text-center'>
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Email</th>
//                         <th>Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {
//                         tableData.map((item,i) =>(
//                             <tr>
//                                 <td>{item.name}</td>
//                                 <td>{item.email}</td>
//                                 <td>
//                                     <button className=' mr-3 text-pink-500'>Edit</button>
//                                     <button onClick={()=> handleDelete(i)} className=' text-yellow-500'>Delete</button>
//                                 </td>
//                             </tr>
//                         ))

                        
//                     }
//                 </tbody>
//             </table>
//         </div>
//     </div>
//   )
// }

// export default Home;


//edit
import React, { useState } from 'react'

function Home() {

  const [inputs,setInputs] = useState({
    name: "",
    email: "",
  });
  const [tableData,setTableData] = useState([])
  const [editClick,setEditClick] = useState(false)
  const [editIndex,setEditIndex] = useState("")

  const handleChange=(e) =>{
    setInputs({
        ...inputs,
        [e.target.name]:e.target.value,
    });
  };
  const handleSubmit=(e) =>{
    e.preventDefault()
    
    if(editClick){
    const tempTableData=tableData;
    Object.assign(tempTableData[editIndex],inputs)
    setTableData([...tempTableData])
    setEditClick(false);
    setInputs(
        {
            name:"",
            email:""
        });
    }else{
        setTableData([...tableData,inputs]);
        setInputs(
            {
                name:"",
                email:""
            });
        
    };
  };
  const handleDelete = (index) => {
    const filterData = tableData.filter((item,i) => i !== index);
    setTableData(filterData);
  };
  const handleEdit =(index)=>{
    const tempData=tableData[index];
  setInputs(
    {
        name:tempData.name, email:tempData.email});
        setEditClick(true)
        setEditIndex(index)
  };
  return (
    <div className=' py-5 min-h-screen bg-[#004b43]'>
        <h1 className=' text-center  font-bold text-white '>Crud App</h1>
        <div className=' bg-[#e5e5e5] max-w-fit  m-auto p-10'>
            <form onSubmit={handleSubmit} >
                <div className='  flex flex-col'>
                    <label>Name</label>
                    <input
                     name='name'
                     value={inputs.name}
                    onChange={handleChange}
                     />
                </div>
                <div className='  flex flex-col'>
                    <label>Email</label>
                    <input
                     name='email'
                     value={inputs.email}
                    onChange={handleChange}
                    />
                </div>

                <button type='submit' className=' w-full bg-[#014b64] text-white mt-4'>
                    {editClick?"update":"Add"}
                </button>
            </form>
        </div>
        <div>
            <table className=' w-full text-center'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tableData.map((item,i) =>(
                            <tr>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>
                                    <button onClick={()=> handleEdit(i)}
                                     className=' mr-3 text-pink-500'>Edit</button>
                                    <button onClick={()=> handleDelete(i)} className=' text-yellow-500'>Delete</button>
                                </td>
                            </tr>
                        ))

                        
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Home;











