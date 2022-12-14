import { Container, Figure, Button } from "./styles";
import { CartContext } from "../../providers/cart";
import { useContext } from "react";

function CartCard({ item }) {
  const { Cart, addToCart, removeFromCart } = useContext(CartContext);
  return (
    <Container>
      <Figure>
        <img src={item.image} alt={item.title} />
      </Figure>
      <div>
        <p>
          {item.title.length > 20
            ? item.title.slice(0, 20) + "..."
            : item.title}
        </p>
        <p>
          {item.price.toLocaleString("pt-br", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
      </div>

      <Button onClick={() => removeFromCart(item.id)}>Remove from Cart</Button>
    </Container>
  );
}

export default CartCard;
