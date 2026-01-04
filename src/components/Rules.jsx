import React from "react";
import styled from "styled-components";

const Rules = ({ onClose }) => {
  return (
    <Overlay>
      <Popup>
        <Heading>How to Play Dice Game</Heading>
        <Content>
          <p>Select any number</p>
          <p>Click on the dice image</p>
          <p>
            If the selected number is equal to the dice number, you get the same
            amount of points as the dice.
          </p>
          <p>If you guess wrong, 2 points will be deducted.</p>
        </Content>
        <CloseButton onClick={onClose}>Close</CloseButton>
      </Popup>
    </Overlay>
  );
};

export default Rules;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6); /* darker overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: fadeIn 0.3s ease forwards;

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const Popup = styled.div`
  background-color: #fff;
  width: 90%;
  max-width: 500px;
  padding: 30px 40px;
  border-radius: 12px;
  text-align: center;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);
  animation: slideUp 0.3s ease forwards;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @keyframes slideUp {
    from {
      transform: translateY(50px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

const Heading = styled.h2`
  font-weight: 600;
  font-size: 32px;
  margin-bottom: 20px;
  color: black;
`;

const Content = styled.div`
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 25px;

  p {
    margin-bottom: 10px;
  }
`;

const CloseButton = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  background-color: #222;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #555;
  }
`;
