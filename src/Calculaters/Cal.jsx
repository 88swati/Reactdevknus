// import React, { useState } from 'react'

// const Cal = () => {
//   const [input, setInput] = useState('545454');
//   const handleButtonClick = (value) => {
//     if (value === 'C') {
//       setInput('');
//     }else if (value === '<'){
//      setInput(input.slice(0, -1));
//   }
//   else if(value === '='){
//    try{
//     setInput(eval(input).toString())
//    }
//    catch(error){
//     setInput('Error')
//   }
// }
//   else{
//     setInput((preValue) => preValue + value)
//   }
// }
//   return (

//     <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
//       <div className="w-64 h-auto bg-white rounded-2xl shadow-xl border-4 border-gray-100">

//         <h1 id='input'>{input}</h1>
//         <div className="w-auto m-3 h-28 text-right space-y-2 py-2"></div>

//         <div className="m-2 flex justify-between">



//           <div onClick={() =>
//             handleButtonClick('C')} className="bg-yellow-100 shadow-md rounded-2xl w-12 h-12 text-yellow-600 font-medium flex justify-center items-center">
//             C
//           </div>

//           <div onClick={() =>
//             handleButtonClick('<')}
//             className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
//             &lt;
//           </div>
//           <div onClick={() =>
//             handleButtonClick('%')}
//             className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
//             %
//           </div>
//           <div onClick={() =>
//             handleButtonClick('/')}
//             className="bg-yellow-500 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center">
//             /
//           </div>
//         </div>
//         <div className="m-2 flex justify-between">
//           <div
//             onClick={() =>
//               handleButtonClick('7')}
//             className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
//             7
//           </div>
//           <div onClick={() =>
//             handleButtonClick('8')}
//             className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
//             8
//           </div>
//           <div onClick={() =>
//             handleButtonClick('9')}
//             className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
//             9
//           </div>
//           <div onClick={() =>
//             handleButtonClick('*')}
//             className="bg-yellow-500 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center">
//             *
//           </div>
//         </div >
//         <div className="m-2 flex justify-between">
//           <div onClick={() =>
//             handleButtonClick('4')}
//             className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
//             4
//           </div>
//           <div onClick={() =>
//             handleButtonClick('5')}
//             className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
//             5
//           </div>
//           <div onClick={() =>
//             handleButtonClick('6')}
//             className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
//             6
//           </div>
//           <div onClick={() =>
//             handleButtonClick('-')}
//             className="bg-yellow-500 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center">
//             -
//           </div>
//         </div>

//         <div  className="m-2 flex justify-between">
//           <div  onClick={() =>
//           handleButtonClick('1')}
//            className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
//             1
//           </div>


//           <div onClick={() =>
//             handleButtonClick('2')}
//             className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
//             2
//           </div>
//           <div onClick={() =>
//             handleButtonClick('3')}
//             className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
//             3
//           </div>
//           <div onClick={() =>
//             handleButtonClick('+')}
//             className="bg-yellow-500 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center">
//             +
//           </div>
//         </div>
//         <div className="m-2 flex justify-between">
//           <div onClick={() =>
//           handleButtonClick('0')}
//            className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
//             0
//           </div>
//           <div onClick={() =>
//             handleButtonClick('00')}
//             className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
//             00
//           </div>
//           <div onClick={() =>
//             handleButtonClick('.')}
//             className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
//             .
//           </div>
//           <div onClick={() =>
//             handleButtonClick('=')}
//             className="bg-yellow-500 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center">
//             =
//           </div>
//         </div>


//       </div>
//     </div>


//   )
// }

// export default Cal;




import React, { useState } from 'react'

const Cal = () => {
  const [input, setInput] = useState('');
  const calculaterResult = (input) =>{
   

    try{
      const operators = ['+', '-', '*', '/'];
      let operator = null;

      for( let i=0; i<input.length;i++){
       if(operators.includes(input[i])){
        operator = input[i];
        break;
      }
      
    }
    if(!operator){
      setInput(parseFloat(input).toString());
      return;
    }
    const [operand1,operand2] = input.split
    (operator).map(parseFloat);
    let result;

    switch(operator){
      case '+':
      result = operand1 + operand2;
      break;

      case '-':
      result = operand1 - operand2;
      break;

      case '*':
      result = operand1 * operand2;
      break;

      case '/':
      result = operand1 / operand2;
      break;
      
    }
        setInput(result.toString());
      }
    
    catch (error){
     setInput('Error')
    }
  }
  const handleButtonClick = (value) => {
    if (value === 'C') {
      setInput('');
    }else if (value === '<'){
     setInput(input.slice(0, -1));
  }
  else if(value === '='){
  calculaterResult(input);
}
  else{
    setInput((preValue) => preValue + value)
  }
}
  return (

    <div className="bg-gray-200 w-screen h-screen flex justify-center items-center">
      <div className="w-64 h-auto bg-white rounded-2xl shadow-xl border-4 border-gray-100">

        <h1 id='input'>{input}</h1>
        <div className="w-auto m-3 h-28 text-right space-y-2 py-2"></div>

        <div className="m-2 flex justify-between">



          <div onClick={() =>
            handleButtonClick('C')} className="bg-yellow-100 shadow-md rounded-2xl w-12 h-12 text-yellow-600 font-medium flex justify-center items-center">
            C
          </div>

          <div onClick={() =>
            handleButtonClick('<')}
            className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
            &lt;
          </div>
          <div onClick={() =>
            handleButtonClick('%')}
            className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
            %
          </div>
          <div onClick={() =>
            handleButtonClick('/')}
            className="bg-yellow-500 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center">
            /
          </div>
        </div>
        <div className="m-2 flex justify-between">
          <div
            onClick={() =>
              handleButtonClick('7')}
            className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
            7
          </div>
          <div onClick={() =>
            handleButtonClick('8')}
            className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
            8
          </div>
          <div onClick={() =>
            handleButtonClick('9')}
            className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
            9
          </div>
          <div onClick={() =>
            handleButtonClick('*')}
            className="bg-yellow-500 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center">
            *
          </div>
        </div >
        <div className="m-2 flex justify-between">
          <div onClick={() =>
            handleButtonClick('4')}
            className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
            4
          </div>
          <div onClick={() =>
            handleButtonClick('5')}
            className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
            5
          </div>
          <div onClick={() =>
            handleButtonClick('6')}
            className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
            6
          </div>
          <div onClick={() =>
            handleButtonClick('-')}
            className="bg-yellow-500 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center">
            -
          </div>
        </div>

        <div  className="m-2 flex justify-between">
          <div  onClick={() =>
          handleButtonClick('1')}
           className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
            1
          </div>


          <div onClick={() =>
            handleButtonClick('2')}
            className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
            2
          </div>
          <div onClick={() =>
            handleButtonClick('3')}
            className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
            3
          </div>
          <div onClick={() =>
            handleButtonClick('+')}
            className="bg-yellow-500 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center">
            +
          </div>
        </div>
        <div className="m-2 flex justify-between">
          <div onClick={() =>
          handleButtonClick('0')}
           className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
            0
          </div>
          <div onClick={() =>
            handleButtonClick('00')}
            className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
            00
          </div>
          <div onClick={() =>
            handleButtonClick('.')}
            className="bg-gray-200 shadow-md rounded-2xl w-12 h-12 text-black font-medium flex justify-center items-center">
            .
          </div>
          <div onClick={() =>
            handleButtonClick('=')}
            className="bg-yellow-500 shadow-md rounded-2xl w-12 h-12 text-white font-medium text-xl flex justify-center items-center">
            =
          </div>
        </div>


      </div>
    </div>


  )
}

export default Cal;