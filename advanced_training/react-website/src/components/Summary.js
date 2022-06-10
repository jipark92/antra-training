import passion from '../images/passion.png'
import ideasSolution from '../images/innovativesolutions.png'
import responsiveDesign from '../images/responsivedesign.png'
import developmentDesign from '../images/developerdesign.png'

export default function Summary() {
    return (
        <div className="summary-container">
            <section className="development-design">
                <img src={developmentDesign}/>
                <div>
                    <h2>Development and Design</h2>
                    <p>I aim to put my creativity to the test, designing and building unique, meaningful products for clients or merely for my own interests.</p>
                </div>
            </section>

            <section className="ideas-solution">
                <img src={responsiveDesign}/>
                <div>
                    <h2>Responsive Layouts</h2>
                    <p>Development and design isn't merely putting information on the site or preferred media outlet. I organize content and present information in an engaging fashion, driving new and unique layouts in tandem with novel solutions and cool animations.</p>
                </div>
            </section>

            <section className="responsive-layout">
                <img src={ideasSolution}/>
                <div>
                    <h2>Ideas and Solutions</h2>
                    <p>There are still many problems that exist in today's society, including laziness. Luckily, I hope to combat these issues by innovating, developing easy-to-use programs, solutions, or products.</p>
                </div>
            </section>

            <section className="passion-dedication">
                <img src={passion}/>
                <div>
                    <h2>Passion and Dedication</h2>
                    <p>With my profound interest and commitment to my field of study, my projects rarely go unfinished and my problems are never left unresolved.</p>
                </div>

            </section>
        </div>
    )
}
