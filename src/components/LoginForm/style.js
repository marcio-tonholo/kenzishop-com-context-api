import styled from "styled-components";

export const Container = styled.main`
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Form = styled.form`
  background-color: var(--black-0);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  width: 70%;
  height: 300px;
  list-style: none;
  border-radius: 8px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
`;
export const Input = styled.input`
  background-color: transparent;
  border: 2px solid var(--red-0);
  padding: 5px;
  border-radius: 8px;
  color: #fff;
  outline: none;
  ::placeholder {
    color: #fff;
  }
`;

export const Button = styled.button`
  background-color: var(--red-1);
  width: 90px;
  color: #fff;
  padding: 3px 0;
  border: none;
  border-radius: 30px;
  margin-right: 5px;
  :hover {
    background-color: var(--red-0);
    color: var(--black-1);
  }
`;
