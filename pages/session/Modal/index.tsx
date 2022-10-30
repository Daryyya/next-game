import React from "react";
import { HOME } from "../../../config/route";
import Star from './Star'
import { ModalStyle, Overlay, Wrapper, Title, Text, StyledNextLink } from "./style";


const Modal = () => {
  return (
    <ModalStyle>
      <Overlay>
        <Wrapper>
          <Title>Победа!</Title>
          <Text>Молодец! Ты успешно справился с заданием!</Text>
          <StyledNextLink href={HOME}>
            Заново
            </StyledNextLink>
        </Wrapper>
        <Star size="small" position={{ top: -25, left: -30 }} />
        <Star size="big" position={{ top: "70%", left: -60 }} />
        <Star size="small" position={{ top: "80%", left: "85%" }} />
        <Star size="big" position={{ top: "20%", left: "85%" }} />
      </Overlay>
    </ModalStyle>
  );
};

export default Modal;
