import React, { useState } from "react";
import styled from "styled-components";
import "./lobby.css";
import dice1 from "../images/diceone.png";
import dice2 from "../images/dicetwo.png";
import dice3 from "../images/dicethree.png";
import dice4 from "../images/dicefour.png";
import dice5 from "../images/dicefive.png";
import dice6 from "../images/dicesix.png";
import Rules from "../components/Rules";
const Lobby = () => {
  const resetScore = () => {
    setScore(0);
  };

  const ruleShow = () => {
    setShowRule(true);

    setTimeout(() => {
      setShowRule(false);
    }, 10000);
  };

  const closeShowRule = () => {
    setShowRule(false);
  };

  const [showRule, setShowRule] = useState(false);
  const [popup, setPopup] = useState(false);
  const [score, setScore] = useState(0);
  const diceImages = [dice1, dice2, dice3, dice4, dice5, dice6];
  const array = [1, 2, 3, 4, 5, 6];

  const [selecletdNumber, setSelectedNumber] = useState();

  const [currentDice, setCurrentDice] = useState(1);

  const generateRandomNumber = (min, max) => {
    const random = Math.floor(Math.random() * (max - min) + min);
    console.log(`random  ` + random);
    return random;
  };

  const rollDice = () => {
    if (selecletdNumber === undefined) {
      setPopup(true);

      setTimeout(() => {
        setPopup(false);
      }, 1000);
      return;
    } else {
      setPopup(false);
      const randomNumber = generateRandomNumber(1, 7);
      setCurrentDice(randomNumber);

      console.log(`selectednumber  ` + selecletdNumber);

      if (selecletdNumber == randomNumber) {
        setScore((prevscore) => prevscore + selecletdNumber);
      } else {
        setScore((prevscore) => prevscore - 2);
      }
    }
  };

  return (
    <>
      {popup && (
        <PopupOverlay>
          <PopupBox>
            <p>Please select a number first!</p>
            <button onClick={() => setPopup(false)}>OK</button>
          </PopupBox>
        </PopupOverlay>
      )}

      {showRule && <Rules onClose={closeShowRule} />}

      <Maindiv>
        <Longdiv>
          <Verticaldiv>
            <p id="Score">{score}</p>
            <p id="Total_score">Total Score</p>
          </Verticaldiv>

          <NumbersDiv>
            <NumberSelectionArray>
              {array.map((value, i) => (
                <Numberbutton
                  isSelected={value == selecletdNumber}
                  key={i}
                  onClick={() => setSelectedNumber(value)}
                >
                  {value}
                </Numberbutton>
              ))}
            </NumberSelectionArray>

            <p id="selectnumber">Select Number</p>
          </NumbersDiv>
        </Longdiv>

        <Herovertical>
          <div id="imagediv">
            <img
              id="lobby_dice_image"
              src={diceImages[currentDice - 1]}
              onClick={rollDice}
              alt="Dice showing one"
            />
            <p id="rolltext">Click On Dice to Roll</p>
          </div>

          <div>
            <button onClick={resetScore} id="resetscore">
              Reset Score
            </button>
            <button onClick={ruleShow} id="showrules">
              Show Rules
            </button>
          </div>
        </Herovertical>
      </Maindiv>
    </>
  );
};

export default Lobby;

/* ================= STYLED COMPONENTS ================= */

const Maindiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const Longdiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1280px;
`;

const Verticaldiv = styled.div`
  width: 135px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NumbersDiv = styled.div`
  width: 522px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

const NumberSelectionArray = styled.div`
  width: 522px;
  display: flex;
  justify-content: space-between;
`;

const Numberbutton = styled.button`
  width: 72px;
  height: 72px;
  background-color: ${(props) => (props.isSelected ? "black" : "white")};
  color: ${(props) => (props.isSelected ? "white" : "black")};
  border: 1px solid black;
`;

const Herovertical = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const PopupBox = styled.div`
  background-color: white;
  padding: 24px 36px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  button {
    margin-top: 12px;
    padding: 6px 12px;
    cursor: pointer;
  }
`;
