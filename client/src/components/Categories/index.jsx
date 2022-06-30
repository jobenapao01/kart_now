import React from "react";
import { Container } from "./categories.elements";
import CategoryItem from "./CategoryItem";
import { categories } from "../../data";

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Categories;
