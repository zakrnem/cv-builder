import "./App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import PersonalDetails from "./components/PersonalDetails";

function App() {
  return (
    <>
      <Header />
      <div className="inputs-container">
        <PersonalDetails />
        <Experience />
        <Education />
      </div>
    </>
  );
}

export default App;
