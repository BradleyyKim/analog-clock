import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { clockHandsDegreeReadOnlyState } from "../store";

const MinuteHand: React.FC = () => {
  const clockHandsDegree = useRecoilValue(clockHandsDegreeReadOnlyState);
  return <MinuteHandContainer degree={clockHandsDegree.minuteHandDegree} />;
};
const MinuteHandContainer = styled.div<{ degree: number }>`
  position: absolute;
  width: 190px;
  height: 5px;
  background: #000;
  border-radius: 0 5px 5px 0;
  transform-origin: center;
  transform: ${({ degree }) => `rotate(${degree}deg) translateX(${95}px)`};
  transition: transform linear 0.5s;
`;
export default MinuteHand;
