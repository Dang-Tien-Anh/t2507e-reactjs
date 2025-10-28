import { useEffect, useState } from "react";
import { Card, Col, ListGroup, Row } from "react-bootstrap";
import Product from "../components/Product";

function CategoryTest() {
    const [categories, setCategories] = useState([]);
    const [product, setProduct] = useState([]);
    const get_cat = async () => {
        //const url = "https://dummyjson.com/product/categories";
        //fetch(url).then(rs => js.json())
        //    .then(data => {
        //        setProducts(data.products);
        //    });
        const url = "https://dummyjson.com/product/categories";
        const rs = await fetch(url);
        const data = await rs.json();
        setCategories(data);
    }

    const get_prod = () => {
        const url = "https://dummyjson.com/product/category/beauty";
        fetch(url).then(rs => js.json())
            .then(data => {
            })
    }
    useEffect(function () {
        get_cat();
        get_prod();
    }, [])
    const prod = {
        thumbnail: "/images/blue-ocean.jpg",
        title: "Tools",
        price: 12
    }
    return (
        <>
            <div className="container">
                <h1>Category</h1>
            </div><Row>
                <Col xs={4}>
                    <ListGroup>
                        <ListGroup.Item>Beauty</ListGroup.Item>
                        <ListGroup.Item>Beauty</ListGroup.Item>
                        <ListGroup.Item>Beauty</ListGroup.Item>
                        <ListGroup.Item>Beauty</ListGroup.Item>
                    </ListGroup>
                </Col>

                <Col xs={8}>
                    <h1>Shop By Category</h1>
                    <Row>
                        {
                            products.map((e, k) => {
                                return (
                                    <Col xs={3} key={k}>
                                        <Product product={e} />
                                    </Col>
                                );
                            })
                        }
                    </Row>
                </Col>
            </Row>
        </>
    )
}

export default CategoryTest;