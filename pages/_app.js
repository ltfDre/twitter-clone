import React, { useState, useLayoutEffect, useEffect } from "react";

import StoreContext from "../store";
import "../styles/app.css";

export default function MyApp({ Component, pageProps }){
  const [theme, setTheme] = useState(null)

  useEffect(() => {
    const theme = localStorage.getItem("THEME") || "light"
    setTheme(theme)
  }, [])

  const changeTheme = (theme) => {
    setTheme(theme)
    localStorage.setItem("THEME", theme)
  }

  useEffect(() => {
    if(!theme) return
    const $html = document.querySelector("html");
    $html.classList.remove("light")
    $html.classList.remove("dark")
    $html.classList.remove("dim")
    $html.classList.add(theme)
  }, [theme])
  return (
    <StoreContext.Provider value={{theme,changeTheme}}>
      <Component {...pageProps} />
    </StoreContext.Provider>
  )
}