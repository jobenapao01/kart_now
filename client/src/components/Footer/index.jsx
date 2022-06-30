import React from "react";
import {
  Center,
  ContactItem,
  Container,
  Desc,
  Left,
  List,
  ListItem,
  Logo,
  Payment,
  Right,
  SocialContainer,
  SocialIcon,
  Title,
} from "./footer.elements";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Kart Now</Logo>
        <Desc>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt ut,
          voluptas, veritatis harum doloremque quibusdam voluptatum accusantium,
          omnis ipsum itaque nostrum. Iste nisi voluptatum expedita tenetur
          similique voluptates fuga iure.
        </Desc>
        <SocialContainer>
          <SocialIcon bgcolor="3B5999">
            <FacebookOutlinedIcon />
          </SocialIcon>
          <SocialIcon bgcolor="E4405F">
            <InstagramIcon />
          </SocialIcon>
          <SocialIcon bgcolor="55ACEE">
            <TwitterIcon />
          </SocialIcon>
          <SocialIcon bgcolor="E60023">
            <PinterestIcon />
          </SocialIcon>
        </SocialContainer>
      </Left>

      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accesories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms & Conditions</ListItem>
        </List>
      </Center>

      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <LocationOnOutlinedIcon style={{ marginRight: "10px" }} />
          Thomas Claudio St., Zamboanga City
        </ContactItem>
        <ContactItem>
          <CallOutlinedIcon style={{ marginRight: "10px" }} />
          +639263555552
        </ContactItem>
        <ContactItem>
          <EmailOutlinedIcon style={{ marginRight: "10px" }} />
          contact@joben.dev
        </ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </Right>
    </Container>
  );
};

export default Footer;
