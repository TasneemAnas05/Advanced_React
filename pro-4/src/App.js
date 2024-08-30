import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name , setName] = useState("");
   const handleSubmit = (e) => {
    e.preventDefault();//to prvent default 
    setName('');//clear the input field
    console.log('Form submitted!')
   }

   
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <div className='Field'>
            <label htmlFor='name'>Name:</label>
            <input 
            id="name"
             type='text'
             placeholder='Name'
              name='name' 
              value={name} 
              onChange={(e)=> setName(e.target.value)} 
              />
          </div>
          {/* if there is no name provided then disable the button*/ }

          <button disabled={!name} type='submit'>Submit</button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
