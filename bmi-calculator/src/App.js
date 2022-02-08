import logo from "./logo.svg";
import "./App.css";
import Inputs from "./components/Inputs";
import Heading from "./components/Heading";
import Results from "./components/Results";

function App() {
  return (
    <div className="App">
      <Heading />
      <Inputs />
    </div>
  );
}

export default App;
