import { useRef } from "react";
import AboutMe from "./aboutme/aboutme";
import "./App.css";
import Home from "./homepage/home";
import NavBar from "./navBar";
import Skills from "./skills/skills";

function App() {
    const portfolioRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <NavBar />
            <div className="portfolio" ref={portfolioRef}>
                <Home />
                <AboutMe />
                <Skills />
            </div>
        </>
    );
}

export default App;
