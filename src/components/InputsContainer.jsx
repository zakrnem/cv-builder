import "../styles/InputsContainer.css";
import PersonalDetails from "./PersonalDetails";
import Experience from "./Experience";
import Education from "./Education"

function InputsContainer() {
  return (
    <div className="inputs-container">
      <PersonalDetails />
      <Experience />
      <Education />
    </div>
  );
}

export default InputsContainer;