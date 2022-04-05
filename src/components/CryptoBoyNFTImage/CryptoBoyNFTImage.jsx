import React from "react";

const CryptoBoyNFTImage = ({ colors }) => {
  const {
    cardBorderColor,
    cardBackgroundColor,
    headBorderColor,
    headBackgroundColor,
    leftEyeBorderColor,
    rightEyeBorderColor,
    leftEyeBackgroundColor,
    rightEyeBackgroundColor,
    leftPupilBackgroundColor,
    rightPupilBackgroundColor,
    mouthColor,
    neckBackgroundColor,
    neckBorderColor,
    bodyBackgroundColor,
    bodyBorderColor,
  } = colors;

  const cryptoboy_card = {
    width: "280px",
    height: "260px",
    margin: "auto",
    backgroundColor: `${cardBackgroundColor}`,
    border: `10px solid ${cardBorderColor}`,
  };

  const head = {
    zIndex: "1",
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    margin: "2rem auto 0",
    border: `3px solid ${headBorderColor}`,
    backgroundColor: `${headBackgroundColor}`,
    position: "relative",
  };

  const eyeLeft = {
    zIndex: "1",
    width: "70px",
    height: "70px",
    backgroundColor: `${leftEyeBackgroundColor}`,
    borderRadius: "50%",
    position: "absolute",
    top: "2rem",
    left: "0rem",
    border: `3px solid ${leftEyeBorderColor}`,
  };

  const eyeRight = {
    zIndex: "1",
    width: "70px",
    height: "70px",
    backgroundColor: `${rightEyeBackgroundColor}`,
    borderRadius: "50%",
    position: "absolute",
    top: "2rem",
    left: "4.5rem",
    border: `6px solid ${rightEyeBorderColor}`,
  };

  const pupilLeft = {
    width: "50px",
    height: "50px",
    backgroundColor: `${leftPupilBackgroundColor}`,
    borderRadius: "50%",
    position: "absolute",
    left: "0.7rem",
    top: "0.7rem",
  };

  const pupilRight = {
    width: "50px",
    height: "50px",
    backgroundColor: `${rightPupilBackgroundColor}`,
    borderRadius: "50%",
    position: "absolute",
    left: "0.1rem",
    top: "0.1rem",
  };

  const mouth = {
    position: "absolute",
    top: "70px",
    left: "0",
    right: "0",
    height: "60px",
    width: "60px",
    margin: "3px auto",
    borderRadius: "100%",
    borderBottom: `8px solid ${mouthColor}`,
  };

  const neck = {
    position: "relative",
    left: "7.7rem",
    top: "-0.1rem",
    width: "15px",
    height: "10px",
    backgroundColor: `${neckBackgroundColor}`,
    border: `2px solid ${neckBorderColor}`,
  };

  const body = {
    height: "50px",
    width: "90px",
    margin: "-0.4rem auto",
    border: `5px solid ${bodyBorderColor}`,
    borderRadius: "100% 100% 100% 100% / 100% 100% 0% 0%",
    backgroundColor: `${bodyBackgroundColor}`,
    position: "relative",
    left: "0.1rem",
  };

  const leftHand = {
    position: "absolute",
    top: "20px",
    width: "15px",
    height: "20px",
    borderRight: `5px solid ${bodyBorderColor}`,
  };

  const rightHand = {
    position: "absolute",
    top: "20px",
    width: "15px",
    height: "20px",
    borderRight: `5px solid ${bodyBorderColor}`,
    right: "1rem",
  };

  return (
    <div style={cryptoboy_card}>
      <div style={head}>
        <div style={eyeLeft}>
          <div style={pupilLeft}></div>
        </div>
        <div style={eyeRight}>
          <div style={pupilRight}></div>
        </div>
        <div style={mouth}></div>
      </div>
      <div style={neck}></div>
      <div style={body}>
        <div style={leftHand}></div>
        <div style={rightHand}></div>
      </div>
    </div>
  );
};

export default CryptoBoyNFTImage;
