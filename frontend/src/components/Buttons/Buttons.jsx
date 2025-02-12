import configButton from "../../assets/texto.png"
import { FaPlus } from "react-icons/fa6";
import "./Buttons.css"

const Buttons = ({ setModalToggle }) => {
    return(
        <section className="buttons-container">
            <img src={configButton} alt="button-config" />
            <button type="submit" onClick={() => setModalToggle(true)}>
                <FaPlus className="plus-icon" />
                <p>adicionar nova palavra</p>
            </button>
        </section>
    )
}

export default Buttons;