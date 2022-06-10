import Button from "./Button";

export default function AboutMe() {
    return (
        <div className="about-me-container">
            <section className="about-me">
                <h1>About Me</h1>
                <h2>Sharing a little bit of my story...</h2>
            </section>

            <section className="overview">
                <h2> General Overview</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </section>
    
            <section className="statistics">
                <h2>Statistics</h2>
                <p><i>And for those that don't fancy reading:</i></p>
            </section>

            <section className="personal-info">
                <p>Male, 200 years old.</p>
                <p>Five feet 100 inches</p>
                <p>Favorite fonts: Roboto</p>
                <p>Loves to learn new things</p>
            </section>


            <button className="contact-btn">Contact</button>
        </div>
    )
}
