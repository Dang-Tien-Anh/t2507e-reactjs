import { Carousel } from "react-bootstrap";
import "./../assets/css/home.css"
import Section1 from "../components/Section1";
import Weather from "../components/Weather";


function Home() {
    const data = {
        msg: "hello T2507E",
        chat: "goodbye"
    }
    return (
        <div className="container">
            <h1>Home Page</h1>
            <Weather />
            <Section1 message={data.msg} sts={4} />
            <Section1 message={data.chat} sts={5} />
            <Carousel>
                <Carousel.Item>
                    <img src="/images/blue-ocean.jpg" />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/images/blue-ocean.jpg" />
                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img src="/images/blue-ocean.jpg" />
                    <Carousel.Caption>
                        <h3>Third slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}
export default Home;