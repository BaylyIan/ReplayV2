import React, { useState, useEffect, createContext } from 'react';

export const PageContext = createContext({
    user:{},
    setUser:()=>{},
    keyword:{},
    setKeyword:()=>{},
})

const Provider = ({children}) => {

    const [user, setUser] = useState()
    const [keyword, setKeyword] = useState("");
    
    useEffect(()=>{
        // console.log(sessionStorage.getItem("user"), 'context')
        const userData = sessionStorage.getItem("user");
        // console.log(userData, 'userData')
        setUser(JSON.parse(userData));  
    }, []);

    return (
        <PageContext.Provider value={{user, setUser, keyword, setKeyword}}>
            {children}
        </PageContext.Provider>
    )

}

export default Provider;