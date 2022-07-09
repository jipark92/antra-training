import Question1 from "./components/Question1";
import Question2 from "./components/Question2";
import teslaData from "./teslaData";

function App() {
  return (
    <div className="App">
      <Question1 teslaData={teslaData} />
      <Question2 teslaData={teslaData} />
    </div>
  );
}

export default App;
