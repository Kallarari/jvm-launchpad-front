import { createContext, useState } from "react";
import type { IContext } from "./types";
import type { IUserMock } from "../../interface";


 const AuthContext = createContext<IContext>({} as IContext)


 function AuthProvider({ children }: {children: React.ReactNode}) {
     const [user, setUser] = useState<IUserMock | null>({
         email: 'teste@email.com',
         name:'teste'
     })
    
    function logout() {
        setUser(null)
    }

    function login(email:string, name:string) {
        setUser((prev) => {
            return {
                ...prev,
                name,
                email
            }
        })
    }

    
    return (
        <AuthContext.Provider value={{login, logout, user}}>
            {children}
        </AuthContext.Provider>
        

    )
    

}

export {AuthContext, AuthProvider}