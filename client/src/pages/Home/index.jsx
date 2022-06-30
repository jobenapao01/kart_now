import {
  Navbar,
  Announcements,
  Footer,
  Newsletter,
  Products,
  Slider,
  Categories,
} from "../../components";

import { Container } from "./home.elements";

const Home = () => {
  return (
    <Container>
      <Announcements />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Home;
