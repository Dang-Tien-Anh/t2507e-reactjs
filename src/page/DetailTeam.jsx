import React, { useState } from "react";
import "../assets/css/DetailTeam.css";

export default function DetailTeam() {
    const [quantity, setQuantity] = useState(1);

    const book = {
        title: "Clap When You Land",
        author: "Haruki Murakami",
        price: 39.0,
        description:
            "Ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem.",
        publisher: "Bloomsbury",
        pages: 370,
        year: 2024,
        format: "Online Book",
        isbn: "2544365629",
        sku: "009",
        category: "Romance",
        tag: "Detective",
        productId: "43971",
        image: "../images/book1.png",
    };

    const testimonials = [
        {
            name: "Tom Rogers",
            location: "Pennsylvania",
            text: "Amazing book!!!",
            rating: 4,
        },
        {
            name: "Nick Carter",
            location: "Minnesota",
            text: "That book is so good, I'll buy 10 for each of my cousins!",
            rating: 5,
        },
        {
            name: "Sam Smith",
            location: "Nevada",
            text: "I wonder if the writer of this book is a chef, because he/she cooked up such a good book!",
            rating: 5,
        },
        {
            name: "Sarah Green",
            location: "California",
            text: "10 out of 10, really good book.",
            rating: 5,
        },
    ];

    return (
        <>
            <div className="single-book-page">
                <div className="single-book-container">
                    <div className="single-book-image">
                        <img src={book.image} alt={book.title} />
                    </div>

                    <div className="single-book-details">
                        <p className="single-book-breadcrumb">
                            Home / {book.category} / {book.title}
                        </p>

                        <h2 className="single-book-title">{book.title}</h2>
                        <p className="single-book-author">{book.author}</p>
                        <p className="single-book-price">${book.price.toFixed(2)}</p>

                        <p className="single-book-desc">{book.description}</p>

                        <div className="single-book-meta">
                            <p><strong>Publisher:</strong> {book.publisher}</p>
                            <p><strong>Number of pages:</strong> {book.pages}</p>
                            <p><strong>Year of publishing:</strong> {book.year}</p>
                            <p><strong>Format:</strong> {book.format}</p>
                            <p><strong>ISBN:</strong> {book.isbn}</p>
                        </div>

                        <div className="single-book-purchase">
                            <div className="single-book-quantity">
                                <button onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
                                <span>{quantity}</span>
                                <button onClick={() => setQuantity(q => q + 1)}>+</button>
                            </div>
                            <button className="single-book-buy-btn">Buy now</button>
                        </div>

                        <div className="single-book-footer">
                            <p><strong>SKU:</strong> {book.sku}</p>
                            <p><strong>Category:</strong> {book.category}</p>
                            <p><strong>Tag:</strong> {book.tag}</p>
                            <p><strong>Product ID:</strong> {book.productId}</p>
                        </div>
                    </div>
                </div>
            </div>

            <section className="testimonials">
                <div className="testimonials-header">
                    <p className="subtitle">Reviews</p>
                    <h2>Readers's reviews</h2>
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
