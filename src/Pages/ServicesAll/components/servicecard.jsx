import { memo } from "react"
import './servicescard.css'

function ServCard({img,name, about,link}) {
    return(
        <div className="ServCard">
            <img src={img} alt="" />
            <h1>{name}</h1>
            <p>{about}</p>
            <a href={link}>Learn more...</a>
        </div>
    )
}

export default memo(ServCard)