import Button from "./Button";
import PortfolioCards from "./PortfolioCards";

export default function Portfolio() {
    return (
        <div className="portfolio-container">
            <header className="portfolio-header">
                <h1>Projects and Portfolio</h1>
                <h2>Sharing my endeavors and passions...</h2>
            </header>

            <section className="projects-container">
                <PortfolioCards
                    projectTitle="LUV TALK Website"
                    projectDescription="Website, created during my first internship, which utilized HTML, CSS, PHP, Ajax, Javascript/jQuery, and Wordpress."
                />

                <PortfolioCards
                    projectTitle="Personal Website"
                    projectDescription="Enjoyable side project that was created to experiment with more HTML and CSS, but also provided an outlet to showcase my abilities and interests."
                />

                <PortfolioCards
                    projectTitle="Strike Zone Analysis"
                    projectDescription="Data analytics project completed during my time at the Illinois Math and Science Academy which studied the baseball strike zone based on the state of the game."
                />
            </section>

            <Button
                classN="more-projects-container"
                buttonText="More Projects"
            />
        </div>
    )
}