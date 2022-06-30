import React from "react";
import { Navbar, Announcements, Footer } from "../../components";
import {
  Bottom,
  Container,
  DetailsContainer,
  Hr,
  InfoContainer,
  PriceDetailContainer,
  ProductAmount,
  ProductAmountContainer,
  ProductColor,
  ProductContainer,
  ProductDetailContainer,
  ProductId,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductSize,
  SummaryButton,
  SummaryContainer,
  SummaryItemContainer,
  SummaryItemPrice,
  SummaryItemText,
  SummaryTitle,
  Title,
  Top,
  TopButton,
  TopText,
  TopTexts,
  Wrapper,
} from "./cart.elements";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Cart = () => {
  return (
    <Container>
      <Announcements />
      <Navbar />
      <Wrapper>
        <Title>Your bag</Title>
        <Top>
          <TopButton>Continue Shopping</TopButton>
          <TopTexts>
            <TopText>Shopping Bag (2)</TopText>
            <TopText>Your Wishlist</TopText>
          </TopTexts>
          <TopButton type="filled">Checkout</TopButton>
        </Top>
        <Bottom>
          <InfoContainer>
            <ProductContainer>
              <ProductDetailContainer>
                <ProductImage src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <DetailsContainer>
                  <ProductName>
                    <b>Product:</b> Jordan 1
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 12312342342
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> XL
                  </ProductSize>
                </DetailsContainer>
              </ProductDetailContainer>
              <PriceDetailContainer>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>2000</ProductPrice>
              </PriceDetailContainer>
            </ProductContainer>
            <Hr />
            <ProductContainer>
              <ProductDetailContainer>
                <ProductImage src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" />
                <DetailsContainer>
                  <ProductName>
                    <b>Product:</b> Jordan 1
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 12312342342
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b> XL
                  </ProductSize>
                </DetailsContainer>
              </ProductDetailContainer>

              <PriceDetailContainer>
                <ProductAmountContainer>
                  <AddIcon />
                  <ProductAmount>2</ProductAmount>
                  <RemoveIcon />
                </ProductAmountContainer>
                <ProductPrice>2000</ProductPrice>
              </PriceDetailContainer>
            </ProductContainer>
          </InfoContainer>
          <SummaryContainer>
            <SummaryTitle>Order Summary</SummaryTitle>
            <SummaryItemContainer>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>80</SummaryItemPrice>
            </SummaryItemContainer>

            <SummaryItemContainer>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>40</SummaryItemPrice>
            </SummaryItemContainer>

            <SummaryItemContainer>
              <SummaryItemText>Shipping Voucher</SummaryItemText>
              <SummaryItemPrice>-30</SummaryItemPrice>
            </SummaryItemContainer>

            <SummaryItemContainer type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>80</SummaryItemPrice>
            </SummaryItemContainer>
            <SummaryButton>Checkout Now</SummaryButton>
          </SummaryContainer>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default Cart;
