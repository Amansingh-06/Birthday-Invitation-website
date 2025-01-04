import React from 'react';
import '../Styles/Footer.css';
import { FaFacebook, FaPhone, FaWhatsapp } from 'react-icons/fa'; // Import React Icons

function Footer() {
    return (
        <footer className="footer">
            <div className="contact">
                <h3>Contact Me</h3>
                <p>If you have any questions, feel free to reach out to me!</p>
            </div>
            <div className="social-icons">
                <a href="https://www.facebook.com/mrkhiladi.aman" target="_blank" rel="noopener noreferrer">
                    <FaFacebook size={30} />
                </a>
                <a href="tel:+9140312239" target="_blank" rel="noopener noreferrer">
                    <FaPhone size={30} />
                </a>
                <a href="https://wa.me/9140312239" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={30} />
                </a>
            </div>
        </footer>
    );
}

export default Footer;
