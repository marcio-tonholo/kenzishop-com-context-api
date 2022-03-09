import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  border: 1px solid var(--red-0);
  margin: 10px;
  padding-bottom: 10px;
  width: 30%;
  box-shadow: 3px 3px 5px var(--red-1);
  p {
    margin: 10px 0;
    height: 70px;
    padding: 5px;
  }

  p + p {
    margin: 0 0 10px 0;
    height: 20px;
    padding: 5px;
  }
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 95%;
  padding: 5px;
  border: 1px var(--red-1) solid;
  border-radius: 8px;
  justify-self: center;
  align-self: center;
  background-color: var(--red-0);
  color: var(--black-0);
  font-weight: bold;
  svg {
    margin-left: 5px;
  }

  :hover {
    opacity: 70%;
  }
`;
export const Figure = styled.figure`
  padding: 10px 0;
  border-radius: 8px 8px 0 0;
  background-color: var(--black-1);
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  border-bottom: 2px solid var(--red-1);
  img {
    max-width: 100%;
  }
`;
