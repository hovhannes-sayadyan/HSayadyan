import { memo } from "react"
import '../Stayles/ProjectsCard.css'

function ProjectsCard({name , logo}) {
    return(
        <section className="ProjectsCards">
            <img src={logo} alt="" />
            <h1>{name}</h1>
        </section>
    )
}

export default memo(ProjectsCard)