import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { clockHandsDegreeReadOnlyState } from "../store";

const SecondHand: React.FC = () => {
  const clockHandsDegree = useRecoilValue(clockHandsDegreeReadOnlyState);
  return <SecondHandContainer degree={clockHandsDegree.secondHandDegree} />;
};
const SecondHandContainer = styled.div<{ degree: number }>`
  position: absolute;
  width: 240px;
  height: 1px;
  background: #000;
  border-radius: 0 5px 5px 0;
  transform-origin: center;
  transform: ${({ degree }) => `rotate(${degree}deg) translateX(${80}px)`};
`;
export default SecondHand;
