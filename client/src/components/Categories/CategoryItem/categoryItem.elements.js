import styled from "styled-components";
import { mobile } from "../../../responsive";

export const Container = styled.div`
  flex: 1;
  margin: 3px;
  height: 70vh;
  width: 100vw;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({
    height: "20vh",
  })}
`;

export const InfoContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: white;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  border: none;
  border-radius: 3px;
  padding: 10px;
  cursor: pointer;
  background-color: white;
  color: gray;
  font-weight: 600;
`;
