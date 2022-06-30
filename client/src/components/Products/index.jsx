import React from "react";
import { popularProducts } from "../../data";
import Product from "./Product";
import { Container } from "./products.elements";
const Products = () => {
  return (
    <Container>
      {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
