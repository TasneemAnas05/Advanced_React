import React from 'react';
import { useState } from 'react';
import './App.css';

//capture a new form
function GoalForm(props){
 const [formData , setFormData] = React.useState({goal:"" , b:""});
 function changeHandler(e) {
  setFormData({...formData, [e.target.name]:e.target.value})
 };
 function submitHandler(e) {
  e.preventDefault();
  props.onAdd(formData);
  setFormData({goal:"",by:""});
 };
 return(
   <div>
    <h1>My Little Lemon Goals</h1>
    <form onSubmit={submitHandler}>
      {/* <input type='text' name='goal' placeholder='Goal' value={formData.goal} onChange={changeHandler}/> */}
      <input type='text' name='goal' placeholder='Goal' value={formData.goal} onChange={changeHandler} />
      <input type='text' name='by' placeholder='By...' value={formData.by} onChange={changeHandler} />
      <button>Submit Goal</button>
    </form>
   </div>
 );
}
// use a previously added goals and add to them 
function ListOfGoals(props){
  return(
    <ul>
      {props.allGoals.map((g)=>(
        <li key={g.goal}>
          <span>My goal is to{g.goal},by{g.by}</span>
        </li>
      ))}
    </ul>
  );
}
// put the prev two compnents together and allow me to render them
export default function App() {
  const [allGoals , updatedAllGoals] = React.useState([]);

  function addGoal(goal) {updatedAllGoals([...allGoals , goal]);}
  return (
    <div className="App">
       <GoalForm onAdd={addGoal} />
       <ListOfGoals allGoals={allGoals}/>
    </div>
  );
}

