import React, {createContext, useState} from 'react'

export const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
    const [state, setState] = useState({
        isAuthenticated: false
    }) 

    const toggleAuth = () => {
        setState({isAuthenticated: !state.isAuthenticated})
    }

    return(
        <AuthContext.Provider value={{...state, toggleAuth}}>
            {children}
        </AuthContext.Provider>
    );
}
 
export default AuthContextProvider;