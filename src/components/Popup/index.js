import React from "react";
import { Button } from "../ButtonElement";
import { PopupContainer, PopupInner } from "./PopUp";

const PopUp = () => {
  return (
    <PopupContainer>
      <PopupInner>
        <Button>Zatvori</Button>
      </PopupInner>
    </PopupContainer>
  );
};

export default PopUp;
