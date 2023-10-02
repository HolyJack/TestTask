import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const CardBody = styled.div`
  padding: 16px 32px;
  background-color: rgb(243 244 246);
  margin-top: 16px;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 0.1),
    0 2px 4px -2px rgb(0 0 0 / 0.1);
  border-radius: 6px;
  &:hover {
    transform: scale(1.02);
  }
`;

const CardLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

interface ICard {
  link: string;
}

export function Card(props: PropsWithChildren<ICard>) {
  const { link, children } = props;
  return (
    <CardLink to={link}>
      <CardBody>{children}</CardBody>
    </CardLink>
  );
}
