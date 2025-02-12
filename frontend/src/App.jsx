import Navbar from "./components/Navbar/Navbar"
import LanguageMarker from "./components/LanguageMarker/LanguageMarker"
import Buttons from "./components/Buttons/Buttons"
import Words from "./components/Words/Words"
import api from "./services/api"

import './App.css'
import { useEffect, useState } from "react"
import NewWords from "./components/NewWords/NewWords"

function App() {
  
  const [allWords, setAllWords] = useState([]);
  const [modalToggle, setModalToggle] = useState(false)

  useEffect(() => {
    const getAllWords = async () => {
      const response = await api.get("/frances");
      setAllWords(response.data);
    }
    
      getAllWords()
  }, [])

  return (
    <>
      {
        modalToggle&&
        <NewWords setModalToggle={setModalToggle}/>
      }
      <Navbar />
      <section className="section-container">
          <LanguageMarker />
          <Buttons setModalToggle={setModalToggle}/>
      </section>
      <Words allWords={allWords}/>
      
    </>
  )
}

export default App
