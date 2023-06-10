import { createContext,useState } from "react"; 



export const FirebaseContext = createContext(null)

export const authContext = createContext(null)



export default function Context ({children}) {
    const [user, setuser] = useState(null)

    return (
        <authContext.Provider value={{user,setuser}} >
            {children}
        </authContext.Provider>
    )


}