import AboutMe from "./AboutMe";
import Contact from "./Contact";
import Introduction from "./Introduction";
import Portfolio from "./Portfolio";
import Summary from "./Summary";

export default function Home() {
    return (
        <div className="home-container">
            <Introduction/>
            <AboutMe/>
            <Summary/>
            <Portfolio/>
            <Contact/>
        </div>
    )
}