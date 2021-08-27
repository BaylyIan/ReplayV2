import React, { useState, useEffect, createContext } from 'react';

export const PageContext = createContext({
    user:{},
    setUser:()=>{}
})

const Provider = ({children}) => {

    const [user, setUser] = useState()
    
    useEffect(()=>{
        console.log(sessionStorage.getItem("user"), 'context')
        const userData = sessionStorage.getItem("user");
        console.log(userData, 'userData')
        setUser(JSON.parse(userData));  
    }, []);

    return (
        <PageContext.Provider value={{user, setUser}}>
            {children}
        </PageContext.Provider>
    )

}

export default Provider