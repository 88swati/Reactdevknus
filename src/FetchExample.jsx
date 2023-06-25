import React, { useEffect, useState } from 'react'
0

const FetchExample = () => {
  const [text, setText] = useState("posts")
  //response ko data name ke variable me store krti hu
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${text}`)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, [text]);
  console.log(data);
  return (
    <div>
      <button onClick={() => setText("posts")}>Posts</button>
      <button onClick={() => setText("users")}>Users</button>
      <button onClick={() => setText("comments")}>Comments</button>
      {data?.map((item, i) => (
        <pre key={i}>{JSON.stringify(item)}
        </pre>
      ))}
    </div>
  );
};
export default FetchExample;