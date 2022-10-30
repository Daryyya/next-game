import React from "react";
import { HOME } from "../../../config/route";
import Button from "../../../kit/Button";
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
      </Overlay>
    </ModalStyle>
  );
};

export default Modal;
