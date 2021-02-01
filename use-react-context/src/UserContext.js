import React, {createContext, useState} from 'react';

export const UserContext = createContext();

export const UserProvider = ({children}) => {
    const [name, setName] = useState("Guilherme");
    const [location, setLocation] = useState("Mars");

    return(
        <UserContext.Provider
            value={{
                name, 
                location,
                setName,
                setLocation
            }}
        >
            {children}
        </UserContext.Provider>
    );
};
