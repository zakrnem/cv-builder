import "./App.css";
import Header from "./components/Header";
import InputsContainer from "./components/InputsContainer";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <InputsContainer />
      </div>
    </>
  );
}

export default App;
