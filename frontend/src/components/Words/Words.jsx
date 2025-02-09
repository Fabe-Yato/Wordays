import { LuAudioLines } from "react-icons/lu";
import priorityBlue from "../../assets/salvar-azul.png";

import "./Words.css";

const Words = ( {frenchWords} ) => {

    return(
        <main className="words-section">
            {frenchWords.map(french => {
                return(
                    <div className="words-container">
                        <LuAudioLines className="audio-icon" />
                        <div className="words">
                            <div className="word-translation">
                                <h3>{french.word}</h3>
                                <p>{french.translation}</p>
                            </div>
                            
                            <img src={priorityBlue} alt="priority" />
                        </div>
                    </div>
                )
            })} 
        </main>
    )
}

export default Words;

