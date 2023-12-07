import { memo } from "react";
import About from "./About/About";
import Home from "./Home/Home";
import Projects from "./Projects/Projects";
import Services from "./Services/Services";

function AllPages() {
    return(
        <div>
            <Home/>
            <About/>
            <Projects/>
            <Services/>
        </div>
    )
}

export default memo(AllPages)