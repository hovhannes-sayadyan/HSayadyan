import { memo } from "react"
import '../Stayles/ServicesCard.css'

function ServicesCard({name , logo, text}) {
    return(
        <section className="ServicesCards">
            <img src={logo} alt="" />
            <h1>{name}</h1>
            <p>{text}</p>
        </section>
    )
}

export default memo(ServicesCard)