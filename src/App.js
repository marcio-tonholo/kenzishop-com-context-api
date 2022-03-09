import GlobalStyle from "./styles/global";
import Routes from "./routes";
import { CatalogueProvider } from "./providers/catalogue";
import { CartProvider } from "./providers/cart";
import CatalogueList from "./components/CatalogueList";
function App() {
  return (
    <>
      <GlobalStyle />
      <CatalogueProvider>
        <CartProvider>
          <Routes />
        </CartProvider>
      </CatalogueProvider>
    </>
  );
}

export default App;
