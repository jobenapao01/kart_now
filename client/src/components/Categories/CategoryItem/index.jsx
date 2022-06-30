import React from "react";
import {
  Button,
  Container,
  Image,
  InfoContainer,
  Title,
} from "./categoryItem.elements";

const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <InfoContainer>
        <Title>{item.title}</Title>
        <Button>Shop Now</Button>
      </InfoContainer>
    </Container>
  );
};

export default CategoryItem;
