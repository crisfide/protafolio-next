"use client";
import { useState, useEffect } from "react";

export const useDarkMode = () => {
  
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    let modoOscuroSistema = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const getModoOscuro = () => {
      if (localStorage.getItem("dark")) {
        return JSON.parse(localStorage.getItem("dark")) //booleano
      }
      return modoOscuroSistema;
    };
    
    setDarkMode(getModoOscuro())
  }, []);


  useEffect(() => {
    if (darkMode==true) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("dark", darkMode);
  }, [darkMode]);

  const cambiarTema = () => setDarkMode(!darkMode);

  return { darkMode, cambiarTema };
};


