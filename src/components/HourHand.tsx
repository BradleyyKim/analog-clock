import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { clockHandsDegreeReadOnlyState } from "../store";

const HourHand: React.FC = () => {
  const clockHandsDegree = useRecoilValue(clockHandsDegreeReadOnlyState);
  return <HourHandContainer degree={clockHandsDegree.hourHandDegree} />;
};
const HourHandContainer = styled.div<{ degree: number }>`
  position: absolute;
  width: 150px;
  height: 10px;
  background: #000;
  z-index: 1;
  border-radius: 0 5px 5px 0;
  transform-origin: center;
  transform: ${({ degree }) => `rotate(${degree}deg) translateX(${75}px)`};
  transition: transform linear 0.5s;
`;
export default HourHand;
