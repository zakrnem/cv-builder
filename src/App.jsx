import "./App.css";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Header from "./components/Header";
import PersonalDetails from "./components/PersonalDetails";

function App() {
  return (
    <>
      <Header />
      <PersonalDetails />
      <Experience />
      <Education />
    </>
  );
}

export default App;
