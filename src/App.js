import React, { useState } from "react";
import "./App.css";

function App() {
    const [ name,setName ] = useState({
        firstname : "",
        lastname : ""
    });
    
    const [ item,setItem ] = useState([]);

    const additem = ()=>{
      setItem([...item,{ 
        id : item.length,
        value : Math.floor(Math.random() * 100)
      }])
    }
  return (
    <div className="App">
      <input type='text' name='firstname' value={name.firstname} onChange={e => setName({...name, firstname : e.target.value})}/>
      <input type='text' name='lastname' value={name.lastname} onChange={e => setName({...name, lastname : e.target.value})}/>
      <h5>your firstname : {name.firstname}</h5>
      <h5>your lastname : {name.lastname}</h5>
      <h4>{JSON.stringify({name})}</h4>

      <h2>Array state</h2>
      <button onClick={additem}>Add item</button>
      <ul>
        {
          item.map(item =>(
          <li key={item.id}>{item.value}</li>
          ))
        }
      </ul>
    </div>
  );
}

export default App;
