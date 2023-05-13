import React from "react";
import { useState } from "react";
import ListItem from "./components/ListItem";

function App() {
  const [list, setList]= useState([]);
    const [input, setInput] = useState('');
//take input value and add into setInput
    const inputChangeHandler = (event) => {
       const inputVal=event.target.value;
       setInput(inputVal);
    }
//add input val into list
    const addListItem = ()=>{
      if(input==''){
        alert('Plz write something');
        return ;
      }
      setList((prevList)=>{
         return [...list,input];
      });

     setInput('');
    }
    //deleting list item
    const deleteListItem=(id)=>{
      const newArr = list.filter((item, idx)=>{
        return (idx!==id);
      });
      setList(newArr);

      console.log('delete button trigered' + id);
    }

  return (
    <React.Fragment>
      <div className="container">
         <div className="heading">
           <h1>TO-DO List</h1> 
         </div>
         <div className="form">
            <input type="text" required onChange={inputChangeHandler} value={input} />
            <button onClick={addListItem}>
              <span>Add ToDo</span>
            </button>
         </div>
         <div>
           <ul>
            {list.map((item, idx)=>{
                  return <ListItem value={item} uniqueId={idx} key={idx} deleteItem={deleteListItem} />;
              })}
           </ul>
         </div>
      </div>
    </React.Fragment>
  );
}

export default App;
