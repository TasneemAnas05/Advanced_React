import logo from './logo.svg';
import './App.css';
import { Children } from 'react';
const Button =({type , children ,...buttonsProps}) =>{
  const className = type === "primary" ? "PrimaryButton" : "SecondaryButton";
  return (
    <button className={`Button ${className}`} {...buttonsProps}>
      {children}
    </button>
  );
};
const LoginButton = ({type , children,...buttonsProps}) =>{
  return (
    <Button 
      type="secondary"
      {...buttonsProps}
      onClick={() =>{
        alert("Logging in !");
      }}
    >
     {children}
    </Button>
  )
}
function App() {
  return (
    <div className="App">
      <header className='Header'>Little Lemon Restaurant🍕</header>
      <Button type="primary" onClick={() => alert("Signing up!")}>
       Sign up
      </Button>
      <LoginButton type="secondary" onClick={()=>alert("Logging in!")}>
        Login
      </LoginButton>
    </div>
  );
}

export default App;
