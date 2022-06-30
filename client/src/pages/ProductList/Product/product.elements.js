import styled from "styled-components";
import { mobile } from "../../../responsive";

export const Container = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  padding: 50px;
  ${mobile({
    padding: "10px",
    flexDirection: "column",
  })}
`;

export const ImageContainer = styled.div`
  flex: 1;
`;

export const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: contain;
  ${mobile({
    height: "30vh",
  })}
`;

export const InfoContainer = styled.div`
  flex: 1;
  padding: 0 50px;
  ${mobile({
    padding: "10px",
  })}
`;

export const Title = styled.h1`
  font-weight: 200;
`;

export const Desc = styled.p`
  margin: 20px 0;
`;

export const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
`;

export const FilterContainer = styled.div`
  display: flex;
  width: 50%;
  margin-top: 20px;
  align-items: center;
  justify-content: space-between;
  ${mobile({
    width: "100%",
  })}
`;

export const Filter = styled.div`
  display: flex;
  align-items: center;
`;

export const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200px;
`;

export const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  cursor: pointer;
  margin: 0 5px;
`;

export const FilterSize = styled.select`
  cursor: pointer;
  margin-left: 10px;
  padding: 5px;
`;

export const FilterSizeOption = styled.option``;

export const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0;
  ${mobile({
    width: "100%",
  })}
`;

export const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
`;

export const Amount = styled.span`
  margin: 0 10px;
  height: 30px;
  width: 30px;
  border-radius: 10px;
  border: 1px solid teal;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  padding: 15px;
  border: 2px solid teal;
  border-radius: 5px;
  cursor: pointer;
  background-color: white;
  font-weight: 500;

  &:hover {
    background-color: teal;
    color: white;
  }
`;
