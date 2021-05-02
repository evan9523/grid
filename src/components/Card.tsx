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
    border-radius: 100%;
    display: flex;
    padding: 10px;
    margin: 15px;
    align-items: center;
    justify-content: center;
    -webkit-box-shadow: 2px 6px 13px 10px rgba(189, 189, 189, 0.77);
    -moz-box-shadow: 2px 6px 13px 10px rgba(189, 189, 189, 0.77);
    box-shadow: 2px 6px 13px 10px rgba(189, 189, 189, 0.77);
    animation-name: floating;
    animation-duration: 3s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    margin-left: 30px;
    margin-top: 5px;
    @keyframes floating {
      from {
        transform: translate(0, 0px);
      }
      65% {
        transform: translate(0, 15px);
      }
      to {
        transform: translate(0, -0px);
      }
    }
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
