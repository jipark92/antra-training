import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <div className="contact-container">
            <header className="contact-header">
                <h1>Contact</h1>
                <p>"XXXXX"</p>
                <p>-XXDXy</p>
            </header>

            <div className="contact-info-container">
                <section className="reach-out-container">
                    <div>
                        <h2>Reaching out to me</h2>
                        <p>Don't be afraid to contact me! I'm happy to answer any questions, provide more information, or just have a nice conversation! Fill out the form below to being reaching out to me. If you prefer another email client other than your default, which will appear after clicking the button and have all of the information you just entered, you can email me at XXXXXX.</p>
                    </div>
                    <div>
                        <h2>Contact Information</h2>
                        <p>XXXX</p>
                        <p>XXXX</p>
                        <p>(XXXX)-445-7747</p>
                        <p>XXXX@gmail.com</p>
                    </div>
                </section>

                <ContactForm/>
            </div>
        </div>
    )
}