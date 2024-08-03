import React from 'react'
import './App.css'
import Header from "./components/Header"
import MainContent from "./components/MainContent"



export default function App() {

const [darkMode, setDarkMode] = React.useState(true)

function toggle() {
  setDarkMode(prevDarkMode => !prevDarkMode)
}

  return (
    <>
      <div>
        <Header 
        toggle={toggle}
        darkMode={darkMode}
        />
        <MainContent 
        toggle={toggle}
        darkMode={darkMode}
        />
      </div>
    </>
  )
}
