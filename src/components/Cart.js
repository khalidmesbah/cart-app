import Table from "react-bootstrap/Table";
import { Container, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart, clearCart } from "../rtk/slices/cartSlice";

const Cart = () => {
  const cartProducts = useSelector((s) => s.cart);
  const dispatch = useDispatch();
  const totalPrice = cartProducts.reduce(
    (a, c) => ((a += c.price * c.quantity), a),
    0
  );
  console.log(totalPrice);

  return (
    <Container className="py-5">
      <Table striped bordered hover className="my-5">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map(({ id, title, price, quantity }) => (
            <tr key={id}>
              <td>{id}</td>
              <td>{title}</td>
              <td>{price}</td>
              <td>{quantity}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => {
                    dispatch(deleteFromCart(id));
                  }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="primary" onClick={() => dispatch(clearCart())}>
        Clear Cart
      </Button>
      <h1 className="mt-5">Total Price: ${totalPrice.toFixed(2)}</h1>
    </Container>
  );
};

export default Cart;
