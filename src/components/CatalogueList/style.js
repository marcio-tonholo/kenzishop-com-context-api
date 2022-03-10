import styled from "styled-components";

export const Container = styled.main`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  list-style: none;
  @media (max-width: 800px) {
    flex-direction: column;
  }
`;
