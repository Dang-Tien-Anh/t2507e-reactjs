import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import ObjectsData from '../json/objects.json';
import SubjectsData from '../json/subjects.json'


function FPT_WEB() {
    const WhoShouldLearn = ({ heading, items }) => (
        <div className="container my-5">
            <h2 className="text-center mb-4">{heading}</h2>
            <div className="row">
                {items.map((item, index) => (
                    <div className="col-md-4 mb-4" key={index}>
                        <div className="card h-100 text-center">
                            <img src={item.image} className="card-img-top" alt={item.title} />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="card-text">{item.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

    );

    const CourseSubjects = ({ subjects, description }) => (
        <div className="container my-5">
            <h2 className="text-center mb-4">What Is the Course Program?</h2>
            <div className="row justify-content-center mb-4">
                {subjects.map(subject => (
                    <div className="col-6 col-md-2 text-center mb-3" key={subject.id}>
                        <img src={subject.image} alt={subject.title} className="img-fluid" style={{ maxHeight: '80px' }} />
                    </div>
                ))}
            </div>
            <div className="text-center">
                <p>{description}</p>
            </div>
        </div>
    );



    return (
        <>
            <nav className="navbar navbar-expand-lg bg-white shadow-sm px-4">
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img src="../images/logo.png" alt="FPT Aptech Logo" style={{ height: '24px', marginRight: '8px' }} />
                    <span className="fw-bold">FPT Aptech</span>
                </a>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item"><a className="nav-link" href="#">About Us</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Products</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Booking</a></li>
                        <li className="nav-item"><a className="nav-link" href="#">Locations</a></li>
                    </ul>

                    <div className="d-flex">
                        <button className="btn btn-warning me-2">Sign In</button>
                        <button className="btn btn-outline-primary">Sign Up</button>
                    </div>
                </div>
            </nav>

            <div className="container text-center my-4">
                <img src="../images/title.jpg"></img>
            </div>

            <WhoShouldLearn heading="Who Should Learn Programming in FPT Aptech?" items={ObjectsData} />
            <CourseSubjects subjects={SubjectsData} description="With a program design that includes 04 semesters with many important technologies such as ReactJS, PHP, Python, .NET Core, Spring boot brings learners to the world of programming quickly, most effectively. After graduation, students are confident in front of employers with 4 project semesters with quality, practical products, students will definitely score points." />

        </>
    );
}

export default FPT_WEB;