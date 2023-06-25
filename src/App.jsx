// //usestate

// // import React, { useState } from 'react'

// // const App = () => {

// //   const initialData = () =>{
// //     console.log('i am here')
// //     return 0;
// //   };
// // // const [count, setCount] = useState(0);
// // // const [count, setCount] = useState(() => initialData()); // callback me pass
// // const [count, setCount] = useState( initialData);
// //  const plus = () => {
// //   console.log(count);
// // //   setCount(count +1)
// // // };
// // setCount((prevCount) => prevCount + 1)
// // // setCount((prevCount) => prevCount + 1)
// // // setCount((prevCount) => prevCount + 1)

// //  };
// // const sub = () => {
// //   console.log(count);
// //   setCount(count -1)
// // };
// // return(
// //   <div className='grid'>
// //     <div className='flex'>
// //       {''}
// //      <button onClick={sub}>-</button>
// //      <div>{count}</div>
// //      <button onClick={plus}> +</button>
// //     </div>
// //   </div>
// // )
// // }
// // export default App;



// //useeffect

// // import React, { useEffect, useState } from 'react'
// // const App = () => {

// //   const [count, setCount] = useState( 0);

// //  const plus = () => {
// //   setCount((prevCount) => prevCount + 1)
// // };

// // const sub = () => {
// //   setCount(count -1)
// // };
// // //1
// // // useEffect(() =>{
// // // console.log("Auto trigger");
// // // },[]);


// // //2
// // useEffect(() =>{
// //   //logic will be written here
// //   console.log("count", count);
// //   return () =>{
// //   // this is clean up function
// //   };
// // },[
// // // count,
// // //this is Dependancy array
// // ])
// // return(
// //   <div className='grid'>
// //     <div className='flex'>
      
// //      <button onClick={sub}>-</button>
// //      <div>{count}</div>
// //      <button onClick={plus}> +</button>
// //     </div>
// //   </div>
// // )
// // }
// // export default App;



// // import {
// //   BrowserRouter as Router,
// //   Route,
// //   Routes,
// // } from "react-router-dom";

// // import Create from "./Component/Create";
// // import Read from "./Components/Read";



// // function App() {
// //   return (
// //     <div className="App">
// //       <Router>
// //        <Routes>
//         {/* <Route path="/" element={ <Read/> } />
//         <Route path="/Create" element={ <Create/> } />
        
        
//        </Routes>
//       </Router>
//     </div>
//   )
// } */}

// // export default App;









// // import {
// //   BrowserRouter as Router,
// //   Route,
// //   Routes,
// // } from "react-router-dom";

// // import Create from "./Component/Create";
// // import Read from "./Component/Read";
// // import Edit from "./Component/Edit";
// // function App() {
// //   return (
// //     <div className="App">
// //       <Router>
// //        <Routes>
// //         <Route path="/" element={ <Read/> } />
// //         <Route path="/Create" element={ <Create/> } />
// //         <Route path="/Edit" element={ <Edit/> } />
        
// //        </Routes>
// //       </Router>
// //     </div>
// //   )
// // }

// // export default App;




// // import React from 'react'
// // import Home from './Pages/Home'

// // function App() {
// //   return (
// //     <div>
// //       <Home/>
// //     </div>
// //   )
// // }

// // export default App

// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
// } from "react-router-dom";


//  import Home from "./projects/Home";
// import About from "./projects/About";
// import Blog from "./projects/Blog";
// import Contact from "./projects/Contact";
// import Footers from "./projects/layout/Footers";

// function App() {
//   return (
//     <div className="App">
//       <Router>
//        <Routes>
//         <Route path="/" element={ <Home/> } />
//         <Route path="/About" element={ <About/> } />
//         <Route path="/Blog" element={ <Blog/> } />
//         <Route path="/Contact" element={ <Contact/> } />
//         <Route path="/Footer" element={ <Footers/> } />
//         <Route path="*" element={<h1> page not found  </h1>}/>
//        </Routes>
//       </Router>
//     </div>
//   )
// }

// export default App;



import React from 'react'
import Cal from './Calculaters/Cal'
function App() {
  return (
    <div>
      <Cal/>
    </div>
  )
}

export default App