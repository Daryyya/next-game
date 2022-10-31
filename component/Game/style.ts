import styled from "@emotion/styled";
import asc from "../../public/image/asc.png";
import desc from "../../public/image/desc.png";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 980px;
  width: 100%;
  min-height: 810px;
  padding: 133px 45px 30px;
`

interface DirectionProps {
  direction: "asc" | "desc"
}

export const Direction = styled.div<DirectionProps>`
  width: fit-content;
  padding-left: ${({direction}) => direction === 'desc' ? '90px' : 0};
  padding-right: ${({direction}) => direction === 'asc' ? '90px' : 0};
  margin-left: ${({direction}) => direction === 'desc' ? 'auto' : 0};
  background-image: url(${({direction}) => direction === 'desc' ? desc.src : asc.src});
  background-position: ${({ direction }) => direction === 'desc' ? 'left' : 'right'};
  background-size: contain;
  background-repeat: no-repeat;
  margin-bottom: 30px;
  @media (max-width: 576px) {
    padding-left: ${({direction}) => direction === 'desc' ? '60px' : 0};
    padding-right: ${({direction}) => direction === 'asc' ? '60px' : 0};
    margin-bottom: 10px;
  }
  
`

export const DirectionText = styled.p`
  font-size: 36px;
  color: #fff;
  font-weight: 700;
  -webkit-text-stroke: 1px #242546;
  text-shadow: 0 0 2px #242546;
  @media (max-width: 768px) {
   font-size: 30px;
  }
  @media (max-width: 576px) {
   font-size: 24px;
  }
`

export const ResultWrapper = styled.div`
  position: relative;
  align-items: center;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 223px;
  align-self: flex-end;
  @media (max-width: 768px) {
    height: 150px;
    padding: 20px;
  }
  @media (max-width: 576px) {
    height: 130px;
    padding: 5px;
  }
`

export const ResultPlace = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  box-shadow: 1px 0px 69px 0px rgba(34, 60, 80, 0.36) inset;
  z-index: 1;

  @media (max-width: 768px) {
    width: 90px;
    height: 90px;
  }
  @media (max-width: 576px) {
    width: 70px;
    height: 70px;
  }
  @media (max-width: 400px) {
    width: 50px;
    height: 50px;
  }
`

export const ResultText = styled.p`
  position: relative;
  font-size: 56px;
  color: #fff;
  font-weight: 700;
  -webkit-text-stroke: 1px #242546;
  text-shadow: 0 0 2px #242546;
  @media (max-width: 768px) {
   font-size: 42px;
  }
  @media (max-width: 576px) {
   font-size: 30px;
  }
`
