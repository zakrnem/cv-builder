import "./App.css";
import CVLayout from "./components/CVLayout";
import Header from "./components/Header";
import InputsContainer from "./components/InputsContainer";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <InputsContainer />
        <CVLayout />
      </div>
    </>
  );
}

export default App;
