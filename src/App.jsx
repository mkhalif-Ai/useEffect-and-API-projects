 
 
 import React from 'react'
 
 function getUsers(){
  const url = "https://jsonplaceholder.typicode.com/users"
  fetch(url)
  .then((response)=>response.json())
  .then ((data) =>console.log(data))
 }
 function App() {
   return (
     <div>
     <button onClick={getUsers}>fetch</button>
  </div>
   )
 }
 
 export default App