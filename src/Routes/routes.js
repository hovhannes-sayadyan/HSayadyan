
import AboutAll from "../Pages/AboutAll/AboutAll";
import AllPages from "../Pages/AllPages/AllPages";
import ProjectsAll from "../Pages/ProjectsAll/ProjectsAll";
import ServicesAll from "../Pages/ServicesAll/ServicesAll";

const routes = [
    {
        path:`/`,
        element:<AllPages/>,
        linkName:`HOME`
    },
    {
        path:`/About`,
        element:<AboutAll/>,
        linkName:`ABOUT`
    },
    {
        path:`/Projects`,
        element:<ProjectsAll/>,
        linkName:`PROJECTS`
    },
    {
        path:`/Services`,
        element:<ServicesAll/>,
        linkName:`SKILLS`
    }
]

export default routes