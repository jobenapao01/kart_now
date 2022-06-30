import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")
      center;
  background-size: cover;
`;

export const Wrapper = styled.div`
  padding: 20px;
  width: 25%;
  background-color: white;
  ${mobile({
    width: "75%",
  })}
`;

export const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 10px;
`;

export const Button = styled.button`
  padding: 10px;
  width: 100%;
  background-color: white;
  border: 1px solid teal;
  cursor: pointer;

  &:hover {
    background-color: teal;
    color: white;
  }
  margin: 10px 0;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Link = styled.a`
  font-size: 12px;
  text-decoration: underline;
  cursor: pointer;
  margin: 5px 0;
`;
