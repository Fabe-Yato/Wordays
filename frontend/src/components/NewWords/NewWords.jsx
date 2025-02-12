import { IoClose } from "react-icons/io5";
import { MdOutlineTranslate } from "react-icons/md";
import { MdTextsms } from "react-icons/md";
import france from "../../assets/franca.png"
import blueFlag from "../../assets/salvar-azul.png"
import yellowFlag from "../../assets/salvar-amarelo.png"
import redFlag from "../../assets/salvar-vermelho.png"
import api from "../../services/api";

import "./NewWords.css"
import { useState } from "react";

const NewWords = ({ setModalToggle }) => {

    const [word, setWord] = useState("");
    const [translation, setTranslation] = useState("");

    const postWords = async() => {
        const newWords = await api.post("/frances",{
            word,
            translation,
            priority: "blue"
        });
        console.log(newWords);
        setWord("");
        setTranslation("");
    }

    return(
        <>
            <div className="modal-background">
                <div className="new-words-modal">
                    <div className="header-modal">
                        <img src={france} alt="" />
                        <h2>Nova Palavra</h2>
                        <IoClose className="close-icon" onClick={() => setModalToggle(false)} />
                    </div>
                    <form>
                        <div className="inputs-modal">
                            
                            <div className="modal-labels word">
                                <MdTextsms className="label-icons" />
                                <label htmlFor="palavra">Palavra</label>
                            </div>
                            
                            <input 
                            type="text" 
                            name="palavra" 
                            value={word} 
                            onChange={e => setWord(e.target.value)}/>

                            <div className="modal-labels translation">
                                <MdOutlineTranslate className="label-icons" />
                                <label htmlFor="traducao">Tradução</label> 
                            </div>
                            
                            <input 
                            type="text" 
                            name="traducao" 
                            value={translation} 
                            onChange={e => setTranslation(e.target.value)}/>
                        </div>
                        <div className="priority-container">
                            <label htmlFor="prioridade">Prioridade</label>
                            <div>
                                <img className="flag" src={blueFlag} alt="prioridade azul" />
                                <img className="flag" src={yellowFlag} alt="prioridade amarela" />
                                <img className="flag" src={redFlag} alt="prioridade vermelha" />
                            </div>
                        </div>
                        
                    </form>
                    <input onClick={postWords} className="submit-button" type="submit" value="adicionar palavra" />
                </div>
            </div>
        </>
    )    
}

export default NewWords;
