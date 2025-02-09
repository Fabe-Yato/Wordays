import Navbar from "./components/Navbar/Navbar"
import LanguageMarker from "./components/LanguageMarker/LanguageMarker"
import Buttons from "./components/Buttons/Buttons"
import Words from "./components/Words/Words"

import './App.css'

function App() {
  
  const frenchWords = [
    {word: "Salut", translation: "Olá", Priority: "blue"},
    {word: "Placard", translation: "Armário", Priority: "yellow"},
    {word: "Comment Allez-Vous", translation: "Como você está", Priority: "blue"},
    {word: "S'il vous plaît", translation: "Por favor", Priority: "blue"},
    {word: "Salut", translation: "Olá", Priority: "blue"},
    {word: "Placard", translation: "Armário", Priority: "yellow"},
    {word: "Comment Allez-Vous", translation: "Como você está", Priority: "blue"},
    {word: "S'il vous plaît", translation: "Por favor", Priority: "blue"}
  ]

  return (
    <>
      <Navbar />
      <section className="section-container">
          <LanguageMarker />
          <Buttons />
      </section>
      <Words frenchWords={frenchWords}/>
    </>
  )
}

export default App
