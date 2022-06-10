import Contact from "./Contact";
import Portfolio from "./Portfolio";
import Summary from "./Summary";

export default function Home() {
    return (
        <div className="home-container">
            Home
            <Summary/>
            <Portfolio/>
            <Contact/>
        </div>
    )
}