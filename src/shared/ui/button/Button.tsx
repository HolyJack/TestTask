import styled from "styled-components";

export const Button = styled.button`
  width: 160px;
  height: 50px;
  border: none;
  background-color: rgb(243 244 246);
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-radius: 6px;

  &:hover {
    background-color: white;
  }
`;
