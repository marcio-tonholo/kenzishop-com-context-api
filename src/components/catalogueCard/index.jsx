import { Container, Figure, Button } from "./styles";
import { CartContext } from "../../providers/cart";
import { useContext } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";

function CatalogueCard({ item }) {
  const { Cart, addToCart } = useContext(CartContext);
  return (
    <Container>
      <Figure>
        <img alt={item.title} src={item.image} />
      </Figure>
      <p>{item.title}</p>
      <p>
        {item.price.toLocaleString("pt-br", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <Button onClick={() => addToCart(item)}>
        Add to Cart
        <BsFillCartPlusFill />
      </Button>
    </Container>
  );
}

export default CatalogueCard;
