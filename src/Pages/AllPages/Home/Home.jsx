import { memo } from "react"
import './Home.css'

function Home() {
    return(
        <section style={{backgroundImage:`url(./Assets/whiteWallpaper.jpg)`}} className="Home">
            <img className='HomeLogo' src="./Assets/HomeLogo.png" alt="" />
            <div class = "container">
                <h1>Hi, my name is</h1>
                <h1>Hovhannes</h1>
                <h1>WEB DEWELOPER</h1>
            </div>
        </section>
    )
}

export default memo(Home
    )