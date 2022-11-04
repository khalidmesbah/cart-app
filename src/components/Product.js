import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { addToCart } from "../rtk/slices/cartSlice";

function Product({ product }) {
  const { image, title, description, price } = product;
  const dispatch = useDispatch();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img style={{ height: "300px" }} variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>${price}</Card.Text>
        <Button onClick={() => dispatch(addToCart(product))} variant="primary">
          Add to cart
        </Button>
      </Card.Body>
    </Card>
  );
}

export default Product;
