import styled from "styled-components";
import Clock from "./components/Clock";

const App = () => {
  return (
    <MainContainer>
      <Clock />
    </MainContainer>
  );
};
const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;
export default App;
