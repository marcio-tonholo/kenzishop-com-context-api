import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 2px solid var(--red-0);
  width: 90%;
  margin: 10px 5px;
  div {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 80%;
    height: 70px;
    padding: 0 10px;
  }

  p {
    font-size: 14px;
    margin-top: 5px;
  }
`;
export const Figure = styled.figure`
  width: 90px;
  border-radius: 8px;
  background-color: var(--black-1);
  margin: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    height: 90px;
  }
`;

export const Button = styled.button`
  width: 70px;
  background-color: transparent;
  color: var(--red-0);
  border: 2px dotted var(--red-0);
  border-radius: 8px;
  padding: 5px;

  :hover {
    opacity: 80%;
    background-color: var(--red-0);
    color: #000;
  }
`;
