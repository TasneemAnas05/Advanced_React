import logo from './logo.svg';
import './App.css';
import { UserProvider, useUser } from './UserContext';

const LoggedInUser = () => {
  const {user} = useUser();
  return (
    <p>
      Hello<sapn className="Username">{user.name}</sapn>
    </p>
  );
};
const Header = () => {
  return (
     <header>
      <h2>Blog App</h2>
      <LoggedInUser />
     </header>
  );
};
const Page = () => {
  const {user} = useUser();
  return(
   <div>
     <h2>What is Lorem ipsum?</h2>
     <p>"Lorem ipsum dolor sit amet, consectetur
       adipiscing elit, sed do eiusmod tempor 
       incididunt ut labore et dolore magna aliqua.
       Ut enim ad minim veniam, quis nostrud exercitation
       ullamco laboris nisi ut aliquip ex ea commodo
      consequat. Duis aute irure dolor in
      reprehenderit in voluptate velit
      esse cillum dolore eu fugiat nulla pariatur. 
      Excepteur sint occaecat cupidatat non proident,
       sunt in culpa qui officia deserunt mollit anim 
       id est laborum."
      </p>
      <p>Written by {user.name}</p>

   </div>
  );
};
function App() {
  return (
    <div className="App">
      <Header />
      <Page/>
    </div>
  );
}
function Root(){
  return (
  <UserProvider>
   <App />
  </UserProvider>);
}

export default App;
