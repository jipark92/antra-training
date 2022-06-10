import Button from "./Button";

export default function PortfolioCards(props) {
    return (
        <div className="portfolio-card">
            <article>
                <h2>{props.projectTitle}ss</h2>
                <p>{props.projectDescription}</p>
                <Button
                    classN="more-btn"
                    buttonText="More"
                />
            </article>
        </div>
    )
}