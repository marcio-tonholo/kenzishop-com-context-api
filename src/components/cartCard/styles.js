import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid var(--red-0);
  height: 100px;
  width: 90%;
  margin: 10px 5px;

  p {
    font-size: 14px;
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
    height: 90%;
  }
`;

export const Button = styled.button`
  width: 70px;
  height: 45px;
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
