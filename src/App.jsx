//  import React, { useState } from 'react'
//  import { UserContext } from './UserContext'
//  import Navbar from "./Navbar"
//  import Dashboard from "./Dashboard"
//  const App = () => {
//   const [user,setUser]=useState(null);
//   function login(){
//     setUser({name:"Ram",age:22});
//   }
//   function logout(){
//     setUser(null);
//   }
//    return (
//      <UserContext.Provider value={{user,login,logout}}>
//        <Navbar/>
//        <Dashboard/>
//      </UserContext.Provider>
//    )
//  }
 
//  export default App
import { useState } from "react";
import { ThemeContext } from "./ThemeContext";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";

function App(){
  const [theme,setTheme]=useState("light");
  function toggleTheme(){
    setTheme(prev=>prev==="light"?"dark":"light");
  }
  return(
    <ThemeContext value={{theme,toggleTheme}}>
      <div style={{
        backgroundColor: theme==="light"?"white":"black",
        color:theme==="light"?"black":"white",
        minHeight:"100vh",
        padding:"20px"
      }}>
        <Navbar/>
        <Dashboard/>
      </div>
    </ThemeContext>
  )
}

export default App;