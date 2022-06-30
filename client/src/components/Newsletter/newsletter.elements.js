import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  width: 100%;
  height: 60vh;
  background-color: lightblue;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  font-size: 70px;
`;

export const Desc = styled.p`
  font-size: 20px;
  font-weight: 300;
  margin: 10px;
  ${mobile({
    textAlign: "center",
  })}
`;

export const InputContainer = styled.div`
  display: flex;
  width: 50%;
  border: 1px solid lightgray;
  ${mobile({
    width: "80%",
  })}
`;

export const Input = styled.input`
  padding: 10px;
  border: none;
  flex: 9;
  padding-left: 20px;
`;

export const Button = styled.button`
  flex: 1;
  cursor: pointer;
  border: none;
  background-color: teal;
  color: white;
`;
