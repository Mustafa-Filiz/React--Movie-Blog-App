import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

function AuthContextProvider({ children }) {
    const [currentUser, setCurrentUser] = useState();

    return (
        <AuthContext.Provider value={{ currentUser }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContextProvider;
