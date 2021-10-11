import { createContext, useState, useEffect } from 'react';
import { observer } from '../auth/Firebase';

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();

    useEffect(() => {
        observer(setCurrentUser)
    }, [])

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
