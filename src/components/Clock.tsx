import { useEffect, useState } from "react";
import styled from "styled-components";
import ClockMain from "./ClockMain";
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil";
import { dateState, digitalTimeReadOnlyState } from "../store";
import ReactTooltip from "react-tooltip";

const Clock: React.FC = () => {
  const setDate = useSetRecoilState(dateState);
  const resetDate = useResetRecoilState(dateState);
  const digitalTime = useRecoilValue(digitalTimeReadOnlyState);
  const [isTooltip, setIsTooltip] = useState(true);
  useEffect(() => {
    const clockInterval = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(clockInterval);
      resetDate();
    };
  }, [resetDate, setDate]);

  return (
    <ClockContainer
      onMouseLeave={() => {
        setIsTooltip(false);
      }}
      onMouseOver={() => {
        setIsTooltip(true);
      }}
    >
      <ClockMain data-tip data-for="analog-clock-tooltip" />
      {isTooltip && (
        <ReactTooltip id="analog-clock-tooltip" aria-haspopup="true" place="right" type="dark" effect="float">
          {digitalTime}
        </ReactTooltip>
      )}
    </ClockContainer>
  );
};
const ClockContainer = styled.div`
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default Clock;
