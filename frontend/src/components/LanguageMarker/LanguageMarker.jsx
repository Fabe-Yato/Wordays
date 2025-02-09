import france from "../../assets/franca.png"
import "./LanguageMarker.css"

const LanguageMarker = () => {
    return(
        <section className="language-marker-container">
            <img src={france} alt="france-flag" />
            <h2>Francês</h2>
        </section>
    )
}

export default LanguageMarker