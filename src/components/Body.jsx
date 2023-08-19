import "../styles/Body.css";
import "../styles/CVcontainer.css";
import PersonalDetails from "./PersonalDetails";
import Experience from "./Experience";
import Education from "./Education";
import CVdetails from "./CVdetails";
import { useState } from "react";
import CVexperience from "./CVexperience";

function Body() {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const toggleForm = () => {
    setIsFormVisible((prevIsFormVisible) => !prevIsFormVisible);
  };

  const [input, setInput] = useState({
    details: {
      name: "",
      email: "",
      phone: "",
      location: "",
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

      <div className="cv-container">
        <CVdetails
          name={input.details.name}
          email={input.details.email}
          phone={input.details.phone}
          location={input.details.location}
        />

        <CVexperience
          company={input.experience.company}
          position={input.experience.position}
          startDate={input.experience.startDate}
          endDate={input.experience.endDate}
          location={input.experience.location}
          description={input.experience.description}
        />
      </div>
    </>
  );
}

export default Body;
