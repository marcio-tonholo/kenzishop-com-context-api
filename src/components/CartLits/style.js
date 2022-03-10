import styled from "styled-components";

export const Container = styled.main`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const List = styled.ul`
  width: 70%;
  background-color: var(--black-0);
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  list-style: none;
  border-radius: 8px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;
export const CartVazio = styled.div`
  width: 70%;
  height: 110px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  border-radius: 8px;
  background-color: var(--black-0);
  color: var(--red-0);
  svg {
    font-size: 60px;
    margin-bottom: 10px;
  }
  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Total = styled.div`
  width: 230px;
  height: 110px;
  margin-left: 20px;
  align-self: flex-start;
  border-radius: 8px;
  border: 2px solid var(--red-0);
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  padding: 5px;
  div {
    display: flex;
    justify-content: space-between;
  }
  button {
    background-color: var(--red-0);
    color: var(--black-0);
    border: none;
    padding: 2px;
    border-radius: 30px;
  }

  @media (max-width: 800px) {
    align-self: center;
    margin-top: 20px;
  }
`;
