import React from "react";
import styled from "styled-components";

export interface CardProps {
  name: string;
  bg: string;
  onPress: any;
}

const Card = (props: CardProps) => {
  const { name, bg, onPress } = props;
  const Wrapper = styled.div`
    width: 150px;
    height: 150px;
    background-color: ${bg};
    border: 1px solid #000;
    border-radius: 10%;
    display: flex;
    margin: 5px;
    align-items: center;
    justify-content: center;
  `;

  const TextStyle = styled.span`
    font-size: 21px;
    font-weight: 600;
    color: white;
  `;
  return (
    <Wrapper onClick={onPress}>
      <TextStyle>{name}</TextStyle>
    </Wrapper>
  );
};

export default Card;
