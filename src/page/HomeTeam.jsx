import React from "react";
import "../assets/css/HomeTeam.css";
import heroBg from '../../src/images/back.png';

function HomeTeam() {
    const books = [
        {
            id: 1,
            img: "../images/book1.png",
            genre: "Detective",
            title: "Clap When You Land",
            author: "Haruki Murakami",
            price: "$39.00",
        },
        {
            id: 2,
            img: "../images/book2.png",
            genre: "Fantasy",
            title: "The Majesties",
            author: "Zac Brewer",
            price: "$36.00",
        },
        {
            id: 3,
            img: "../images/book3.png",
            genre: "Shop",
            title: "Wild Wicked Things",
            author: "Francesca May",
            oldPrice: "$25.00",
            price: "$21.00",
            discount: "-16%",
        },
        {
            id: 4,
            img: "../images/book4.png",
            genre: "Book",
            title: "Shame is an Ocean",
            author: "Mary Lambert",
            price: "$46.00",
        },
        {
            id: 5,
            img: "../images/book5.png",
            genre: "Online",
            title: "De Muziekdoos",
            author: "Ottessa Moshfegh",
            price: "$26.00",
        },
    ];

    const menuItems = [
        { name: "Cocoa", price: "$9", desc: "Lorem ipsum dolor sit amet consectetur." },
        { name: "Cappuccino", price: "$12", desc: "Lorem ipsum dolor sit amet consectetur." },
        { name: "Espresso", price: "$5", desc: "Lorem ipsum dolor sit amet consectetur." },
        { name: "Macchiato", price: "$11", desc: "Lorem ipsum dolor sit amet consectetur." },
        { name: "Black coffee", price: "$4", desc: "Lorem ipsum dolor sit amet consectetur." },
    ];

    const testimonials = [
        {
            name: "Tom Rogers",
            location: "Pennsylvania",
            text: "The coffee here never disappoints — rich flavor, warm atmosphere, and friendly faces every time.",
            rating: 4,
        },
        {
            name: "Nick Carter",
            location: "Minnesota",
            text: "A perfect place to unwind. Their cappuccino is my go-to, and the pastries are divine.",
            rating: 5,
        },
        {
            name: "Sam Smith",
            location: "Nevada",
            text: "Feels like home. Cozy seating, great aroma, and the staff truly care about the craft.",
            rating: 5,
        },
        {
            name: "Sarah Green",
            location: "California",
            text: "Absolutely love the vibe here. Every visit feels special — highly recommend!",
            rating: 5,
        },
    ];


    return (
        <>
            <div className="home">
                <section className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
                    <div className="hero-overlay">
                        <div className="hero-content">
                            <h1 className="hero-title">
                                Where <span>Pages Turn</span> <br /> and <em>Coffee Flows</em>
                            </h1>
                            <p className="hero-text">
                                A cozy corner for curious minds and coffee lovers. We blend the art of storytelling with the comfort of a freshly brewed cup — because inspiration deserves both.
                            </p>
                        </div>
                    </div>
                </section>
            </div>

            <section className="bookcafe">
                <div className="bookcafe-left">
                    <div className="text-block">
                        <p className="subtitle">WHO WE ARE</p>
                        <h1 className="heading">Where bookworms and <br /> coffee lovers meet</h1>
                    </div>

                    <div className="image-block">
                        <img src="../images/common.jpg" alt="Coffee and cake" />
                    </div>
                </div>

                <div className="bookcafe-right">
                    <img className="reading-img" src="../images/woman.png" alt="Person reading a book" />
                    <p className="description">
                        At our core, we’re a community space where stories and aromas blend together. We believe a good book deserves a great cup of coffee, and every visit should feel like coming home — calm, inspiring, and full of warmth.
                    </p>
                </div>
            </section>
            <div className="light-skin">
                <section className="bestselling">
                    <p className="subtitle">POPULAR BOOKS</p>
                    <h2 className="title">Bestselling books</h2>

                    <div className="book-grid">
                        {books.map((book) => (
                            <div className="book-card" key={book.id}>
                                <div className="book-image">
                                    <img src={book.img} alt={book.title} />
                                    {book.discount && <span className="discount">{book.discount}</span>}
                                </div>
                                <p className="genre">{book.genre}</p>
                                <h3 className="book-title">{book.title}</h3>
                                <p className="author">{book.author}</p>

                                <div className="price">
                                    {book.oldPrice && <span className="old">{book.oldPrice}</span>}
                                    <span className="current">{book.price}</span>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="view-btn">View All Books</button>
                </section>

            </div>

            <section className="coffee-section">
                <div className="coffee-container">
                    <div className="coffee-left">
                        <h2 className="coffee-title">Coffee</h2>
                        <hr className="divider" />

                        <ul className="coffee-list">
                            {menuItems.map((item, index) => (
                                <li key={index} className="coffee-item">
                                    <div className="coffee-info">
                                        <span className="coffee-name">{item.name}</span>
                                        <span className="dots"></span>
                                        <span className="coffee-price">{item.price}</span>
                                    </div>
                                    <p className="coffee-desc">{item.desc}</p>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="coffee-right">
                        <img src="../images/coffee-photo.png" alt="Coffee cup" />
                    </div>
                </div>
            </section>

            <section className="stories">
                <div className="stories-grid">
                    <img src="../images/brew.png" alt="Barista making coffee" />
                    <img src="../images/drink.png" alt="Woman enjoying coffee" />
                    <img src="../images/cup.png" alt="Cup of latte art" />
                    <img src="../images/some.png" alt="Cup of latte art" />
                </div>

                <div className="stories-text">
                    <p className="subtitle">WELCOME TO BLACKS</p>
                    <h2>Stories brew here</h2>
                    <p className="intro">
                        Every cup we pour tells a story — of warmth, connection, and the
                        simple pleasure of slowing down. Whether it’s your first visit or
                        your hundredth, there’s always something new to savor.
                    </p>

                    <div className="stories-list">
                        <div className="item">
                            <h4>Sweet treats</h4>
                            <p>Delight in freshly baked pastries crafted to pair perfectly with your coffee.</p>
                        </div>
                        <div className="item">
                            <h4>Fresh coffee</h4>
                            <p>Our beans are sourced with care and brewed with passion in every cup.</p>
                        </div>
                    </div>
                </div>
            </section>


            <section className="testimonials">
                <div className="testimonials-header">
                    <p className="subtitle">Testimonials</p>
                    <h2>Client’s feedback</h2>
                </div>

                <div className="testimonials-grid">
                    {testimonials.map((t, i) => (
                        <div key={i} className="testimonial-card">
                            <div className="stars">
                                {"★".repeat(t.rating)}
                                {"☆".repeat(5 - t.rating)}
                            </div>
                            <p className="text">“{t.text}”</p>
                            <h4>{t.name}</h4>
                            <p className="location">{t.location}</p>
                        </div>
                    ))}
                </div>
            </section>


            <section class="contact-section">
                <div class="contact-container">
                    <div class="contact-text">
                        <p class="contact-subtitle">CONTACT US</p>
                        <h2 class="contact-title">Have questions?<br />Get in touch!</h2>
                        <p class="contact-desc">
                            We’d love to hear from you — whether it’s about collaborations, feedback,
                            or just to say hi over a virtual cup of coffee. Reach out and we’ll get
                            back to you as soon as we can!
                        </p>
                        <button class="contact-btn">Get in Touch</button>
                    </div>

                    <div class="contact-info">
                        <div class="info-block">
                            <p><strong>Address:</strong> 785 15th Street, Office 478, Berlin, DE 81566</p>
                            <p><strong>Phone:</strong> +1 840 841 2569</p>
                            <p><strong>Hours:</strong> Mon–Fri 9 AM–6 PM · Sat 9 AM–4 PM · Sun Closed</p>
                            <p><strong>Email:</strong> info@email.com</p>
                        </div>
                    </div>
                </div>
            </section>

            <footer class="footer">
                <div class="footer-container">
                    <div class="footer-section">
                        <h3>Working Hours</h3>
                        <p>Mon–Fri: 9 AM – 6 PM</p>
                        <p>Saturday: 9 AM – 4 PM</p>
                        <p>Sunday: Closed</p>
                    </div>

                    <div class="footer-section">
                        <h3>Office</h3>
                        <p>Germany —</p>
                        <p>785 15th Street, Office 478</p>
                        <p>Berlin, DE 81566</p>
                        <p><a href="mailto:info@email.com">info@email.com</a></p>
                        <p>+1 840 841 25 69</p>
                    </div>

                    <div class="footer-section">
                        <h3>Links</h3>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">Membership</a></li>
                            <li><a href="#">About Us</a></li>
                            <li><a href="#">Features</a></li>
                            <li><a href="#">Contact Us</a></li>
                        </ul>
                    </div>

                    <div class="footer-section">
                        <h3>Get in Touch</h3>
                        <div class="footer-socials">
                            <a href="#">Facebook</a>
                            <a href="#">Twitter</a>
                            <a href="#">Instagram</a>
                        </div>
                    </div>
                </div>

                <div class="footer-bottom">
                    <p>ThemeRex © 2025. All Rights Reserved.</p>
                </div>
            </footer>

        </>
    );
}

export default HomeTeam;