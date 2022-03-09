import { Container, Span } from "./styles";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { FaShopware, FaShoppingCart } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { CartContext } from "../../providers/cart";
import { useContext } from "react";
function Header() {
  const { Cart } = useContext(CartContext);
  const history = useHistory();
  return (
    <Container>
      <Span>
        <div onClick={() => history.push("/")}>
          <FaShopware />
          Kenzie Shop
        </div>
      </Span>

      <Span>
        <p>{Cart.length}</p>
        <div onClick={() => history.push("/cart")}>
          <FaShoppingCart />
          Cart
        </div>
        <div onClick={() => history.push("/login")}>
          <FiLogIn />
          Login
        </div>
      </Span>
    </Container>
  );
}

export default Header;
