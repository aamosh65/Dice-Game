import React from "react";
import dice_image from "/images/dices_main.png";
import styled from "styled-components";
import "./mainpage.css";
import { useNavigate } from "react-router-dom";
const Mainpage = () => {
  const navigate = useNavigate();

  function handleplay() {
    navigate("/lobby");
  }
  return (
    <>
      <Maindiv>
        <img src={dice_image} alt="" />

        <RightDiv>
          <p id="dicegame">DICE GAME</p>
          <PlaynowBtn onClick={handleplay}>Play Now</PlaynowBtn>
        </RightDiv>
      </Maindiv>
    </>
  );
};

export default Mainpage;

const Maindiv = styled.div`
  display: flex;
  width: 1182px;
  height: 522px;
`;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;
  height: auto;
  width: auto;
`;

const PlaynowBtn = styled.button`
  width: 220px;
  height: 44px;
`;
