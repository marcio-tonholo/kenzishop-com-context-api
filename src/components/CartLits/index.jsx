import { useContext } from "react";
import { CartContext } from "../../providers/cart";
import CartCard from "../cartCard";
import { Container, List, CartVazio, Total } from "./style";
import { BsFillCartXFill } from "react-icons/bs";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
function CartList() {
  const { Cart } = useContext(CartContext);
  const history = useHistory();
  return (
    <>
      {Cart.length <= 0 ? (
        <Container>
          <CartVazio>
            <BsFillCartXFill />
            <p>Cart Vazio</p>
          </CartVazio>
          <Total>
            <h3>Itens: {Cart.length} </h3>
            <h3>Preço Total:</h3>
            <div>
              <p>
                {Cart.reduce((a, b) => a + b.price, 0).toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </p>
              <button onClick={() => history.push("/login")}>
                Finalizar compra
              </button>
            </div>
          </Total>
        </Container>
      ) : (
        <Container>
          <List>
            {Cart.map((item, index) => (
              <CartCard item={item} key={index} />
            ))}
          </List>
          <Total>
            <h3>Itens: {Cart.length} </h3>
            <h3>Preço Total: </h3>
            <div>
              <p></p>
              <button onClick={() => history.push("/login")}>
                Finalizar compra
              </button>
            </div>
          </Total>
        </Container>
      )}
    </>
  );
}

export default CartList;
