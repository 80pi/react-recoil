import "./App.css";
import { RecoilRoot } from "recoil";
import TodoContainer from "./pages/TodoContainer";

function App() {
  return (
    <>
      <RecoilRoot>
        <TodoContainer />
      </RecoilRoot>
    </>
  );
}

export default App;
