import styled from "styled-components";
import { calculateHourLabelDegree, calculateTickLabelDegree } from "../helpers";
import HourHand from "./HourHand";
import MinuteHand from "./MinuteHand";
import SecondHand from "./SecondHand";

const HOUR_LABELS = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const ClockMain: React.FC = ({ ...props }) => {
  return (
    <ClockMainContainer {...props}>
      <ClockCenter />
      {Array.from(Array(60)).map((_, index) => (
        <TickLabel isBig={index % 5 === 0} degree={calculateTickLabelDegree(index)} key={index} offset={230} />
      ))}
      {/* hour labels */}
      {HOUR_LABELS.map((label, index) => (
        <HourLabel key={label.toString() + index} degree={calculateHourLabelDegree(index)} offset={200}>
          <span>{label}</span>
        </HourLabel>
      ))}
      <HourHand />
      <MinuteHand />
      <SecondHand />
    </ClockMainContainer>
  );
};
const ClockMainContainer = styled.div`
  width: 500px;
  height: 500px;
  background: "#dedede";
  border-radius: 50%;
  border: 5px solid #000;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ClockCenter = styled.div`
  width: 20px;
  height: 20px;
  background: #000;
  border-radius: 50%;
  z-index: 2;
`;
const TickLabel = styled.div<{
  isBig: boolean;
  degree: number;
  offset: number;
}>`
  position: absolute;
  width: ${({ isBig }) => (isBig ? "18px" : "9px")};
  height: ${({ isBig }) => (isBig ? "0.1px" : "0.1px")};
  border-radius: 2px;
  background: #000;
  transform-origin: center;
  transform: ${({ degree, offset }) => `rotate(${degree}deg) translateX(${offset}px)`};
`;
const HourLabel = styled.div<{
  degree: number;
  offset: number;
}>`
  position: absolute;
  display: flex;
  color: ${({ color }) => color};
  transform-origin: center;
  transform: ${({ degree, offset }) => `rotate(${degree}deg) translateX(${offset}px)`};
  span {
    font-size: 32px;
    font-weight: 500;
    transform: ${({ degree }) => `rotate(${-degree}deg)`};
  }
`;
export default ClockMain;
