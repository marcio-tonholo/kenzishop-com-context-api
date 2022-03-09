import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 80px;
  height: 50px;
  box-shadow: 0px 0px 30px var(--red-0);
  margin-bottom: 10px;
`;

export const Span = styled.span`
  cursor: pointer;
  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
  }
  div {
    display: flex;
    align-items: center;
    margin-right: 5px;
  }
  div + div {
    margin-left: 20px;
  }
  p {
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--black-0);
    height: 15px;
    padding: 3px;
    border-radius: 30px;
    margin-top: -15px;
    margin-right: -25px;
    z-index: 1;
  }
`;
