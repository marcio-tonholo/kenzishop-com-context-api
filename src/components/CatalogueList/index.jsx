import { useContext } from "react";
import { CatalogueContext } from "../../providers/catalogue";
import CatalogueCard from "../catalogueCard/index";
import { Container, List } from "./style";

function CatalogueList() {
  const { catalogue } = useContext(CatalogueContext);

  return (
    <Container>
      <List>
        {catalogue.map((item, index) => (
          <CatalogueCard item={item} key={index} />
        ))}
      </List>
    </Container>
  );
}

export default CatalogueList;
