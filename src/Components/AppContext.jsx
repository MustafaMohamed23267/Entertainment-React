import {   createContext, useEffect, useState } from "react";
//import { AppContext } from "./AppContext";

export const AppContext = createContext();

export const AppProvider = ({children})=>
    {
        const [token , setToken] = useState(localStorage.getItem("token"));
        const [user , setUser] = useState(null);
        const getUser = async ()=>
            {
                const res = await fetch("http://127.0.0.1:8000/api/user",
                    {
                        headers:{
                           "Content-Type": "application/json",
                            Authorization:`Bearer ${token}`,
                        },
                    });
                    const data = await res.json();
                    if(res.ok){
                        setUser(data)
                    }
                    
            }

            useEffect(()=>{
                if(token)
                    {
                        getUser();
                    }
            },[token])
        return (
        <AppContext.Provider value={{token , setToken , user , setUser}}>
            {children}
        </AppContext.Provider>);
        
       
    }