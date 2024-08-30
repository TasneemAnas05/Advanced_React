import { createContext, useContext } from "react";
const UserContext = createContext(undefined);
//create a provider component
export const UserProvider = ({children}) => {
    const [user] = useState({
        name:"Tasnim",
        email: "tasneemanas05@gmail.com",
        dob : "09/12/2005",
    })
    return <UserContext.Provider value={{user}}></UserContext.Provider>
}
export const useUser = () => useContext(UserContext);

