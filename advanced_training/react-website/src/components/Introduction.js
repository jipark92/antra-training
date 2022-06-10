import Button from "./Button";

export default function Introduction() {
    return (
        <div className="introduction-container">
            <h1>Hello, I'm</h1>
            <p className="name-text">XXXX</p>
            <h1>UI Developer. UX Designer. Problem Solver.</h1>

            <div className="info-portfolio-btn-container">
                <Button
                    classN="info-portfolio-btn-container"
                    buttonText="Info"
                />

                <Button
                    classN="info-portfolio-btn-container"
                    buttonText="Portfolio"
                />
            </div>
        </div>
    )
}