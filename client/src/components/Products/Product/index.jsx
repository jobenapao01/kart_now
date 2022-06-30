import React from "react";
import {
  Circle,
  Container,
  IconContainer,
  Image,
  InfoContainer,
} from "./product.elements";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Product = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Image src={item.img} />
      <InfoContainer>
        <IconContainer>
          <ShoppingCartOutlinedIcon />
        </IconContainer>
        <IconContainer>
          <SearchOutlinedIcon />
        </IconContainer>
        <IconContainer>
          <FavoriteBorderOutlinedIcon />
        </IconContainer>
      </InfoContainer>
    </Container>
  );
};

export default Product;
