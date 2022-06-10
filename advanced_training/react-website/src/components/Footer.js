import facebook from '../images/facebook.svg'
import linkedIn from '../images/linkedin.svg'
import pinterest from '../images/pinterest.svg'
import email from '../images/email.svg'
import {Link} from 'react-router-dom'

export default function Footer() {
    return (
        <footer className="footer-container">
            <section className="social-contact-container">
                <div className='contacts-1'>
                    <img src={facebook}/>
                    <img src={linkedIn}/>
                    <img src={pinterest}/>
                    <img src={email}/>
                </div>
                <div className='contacts-2'>
                    <p>Phone: XXXXXXX</p>
                    <p>Email: XXXXXXX@gmail.com</p>
                </div>
            </section>
            <div className='information-container'>
                <section className='location'>
                    <p>XXXX</p>
                    <p>CopyRight © 2021 </p>
                    <p>NY</p>
                </section>
                <section className='home'>
                    <Link to='/'>Home</Link>
                </section>
                <section className='portfolio'>
                    <div>
                        <Link to='/portfolio'>Portfolio</Link>
                    </div>
                    <div className='projects'>
                        <a href="#">Project 1</a>
                        <a href="#">Project 2</a>
                        <a href="#">Project 3</a>
                        <a href="#">See All</a>
                    </div>
                </section>
                <section className='resume'>
                    <a href="#">Resume</a>
                    <a href="#">Download</a>
                </section>
                <section>
                    <Link to='/contact'>Contact</Link>
                </section>
            </div>
        </footer>
    )
}
