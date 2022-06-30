import React from "react";
import {
  Button,
  Container,
  Form,
  Input,
  Title,
  Link,
  Wrapper,
  LinkContainer,
} from "./login.elements";

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>Login</Title>
        <Form>
          <Input placeholder="Username" />
          <Input placeholder="Password" />

          <Button>Login</Button>
          <LinkContainer>
            <Link>Forgot Password?</Link>
            <Link>Create an account</Link>
          </LinkContainer>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
