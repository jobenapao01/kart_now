import styled from "styled-components";
import { mobile } from "../../responsive";

export const Container = styled.div`
  display: flex;
  padding: 20px;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  ${mobile({
    padding: "0",
    flexDirection: "column",
  })}
`;
