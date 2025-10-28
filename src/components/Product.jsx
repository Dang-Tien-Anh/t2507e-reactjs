import { Card } from "react-bootstrap";

function Product(props) {
    const product = props.product;
    return (
        <Card>
            <Card.Img variant="top" src={product.thumbnail} />
            <Card.Body>
                <h3>What</h3>
            </Card.Body>
        </Card>
    )
}
export default Product;