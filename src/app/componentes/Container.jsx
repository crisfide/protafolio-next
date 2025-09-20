"use client";

// import { HashRouter } from "react-router-dom"
import {Header, Footer} from "."
import { DarkContext } from "../context/DarkContext"
import  Main  from "./main/home/Main"
import {useDarkMode} from "../hooks/useDarkMode"



const Container = ({children}) => {
  const { darkMode, cambiarTema } = useDarkMode()

  return (
    <>    
      <DarkContext.Provider value={{ darkMode, cambiarTema }}>
          {children}
      </DarkContext.Provider>
    </>
  )
}

export default Container