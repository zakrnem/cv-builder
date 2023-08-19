import "../styles/InputsContainer.css";
import PersonalDetails from "./PersonalDetails";
import Experience from "./Experience";
import Education from "./Education";
import CVLayout from "./CVLayout";
import { useState } from "react";

function InputsContainer() {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const toggleForm = () => {
    setIsFormVisible((prevIsFormVisible) => !prevIsFormVisible);
  };

  const [input, setInput] = useState({
    details: {
      name: "",
      email: "",
      number: "",
      address: "",
    },
    experience: {
      company: "",
      position: "",
      startDate: "",
      endDate: "",
      location: "",
      description: "",
    },
    education: {
      school: "",
      degree: "",
      startDate: "",
      endDate: "",
      location: "",
    },
  });
  const handleInputChange = (group, field, value) => {
    setInput((prevInput) => ({
      ...prevInput,
      [group]: {
        ...prevInput[group],
        [field]: value,
      },
    }));
    console.log(input);
  };

  return (
    <>
      <div className="inputs-container">
        <PersonalDetails
          toggleForm={toggleForm}
          isFormVisible={isFormVisible === true}
          handleInputChange={handleInputChange}
          input={input}
        />

        <Experience
          toggleForm={toggleForm}
          isFormVisible={isFormVisible === true}
          handleInputChange={handleInputChange}
          input={input}
        />

        <Education
          toggleForm={toggleForm}
          isFormVisible={isFormVisible === true}
          handleInputChange={handleInputChange}
          input={input}
        />
      </div>
      <CVLayout
        name={input.details.name}
        email={input.details.email}
        phone={input.details.phone}
        location={input.details.location}
      />
    </>
  );
}

export default InputsContainer;
