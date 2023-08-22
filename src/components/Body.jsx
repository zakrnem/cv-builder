import "../styles/InputsContainer.css";
import "../styles/CVcontainer.css";
import PersonalDetails from "./PersonalDetails";
import Experience from "./Experience";
import Education from "./Education";
import CVdetails from "./CVdetails";
import { useState } from "react";
import CVexperience from "./CVexperience";
import CVeducation from "./CVeducation";

function Body() {
  const [numberFormVisible, setNumberFormVisible] = useState(1);
  const toggleForm = (arg) => {
    arg === numberFormVisible ? setNumberFormVisible(0) : setNumberFormVisible(arg);    
  };

  const [input, setInput] = useState({
    details: {
      name: "John Doe",
      email: "email@email.com",
      phone: "123-456-7890",
      location: "Sri Lanka",
    },
    experience: {
      company: "Umbrella Inc",
      position: "Janitor",
      startDate: "2021-06",
      endDate: "2023-08",
      location: "Qatar",
      description:
        "Experienced and diligent Janitorial Services Specialist with a proven track record of maintaining clean and organized environments. Adept at performing various cleaning tasks, adhering to safety protocols, and contributing to a positive team atmosphere. Possesses excellent attention to detail and the ability to work independently. Seeking to leverage skills and experience in providing exceptional janitorial services.",
    },
    education: {
      school: "Ken's High School",
      degree: "High School Diploma",
      startDate: "1985-01",
      endDate: "2000-04",
      location: "Monte Carlo",
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
  }

  return (
    <>
      <div className="inputs-container">
        <PersonalDetails
          toggleForm={toggleForm}
          numberFormVisible={numberFormVisible}
          handleInputChange={handleInputChange}
          input={input}
        />

        <Experience
          toggleForm={toggleForm}
          numberFormVisible={numberFormVisible}
          handleInputChange={handleInputChange}
          input={input}
        />

        <Education
          toggleForm={toggleForm}
          numberFormVisible={numberFormVisible}
          handleInputChange={handleInputChange}
          input={input}
        />
      </div>

      <div className="cv-sheet">
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

          <CVeducation
            school={input.education.school}
            degree={input.education.degree}
            startDate={input.education.startDate}
            endDate={input.education.endDate}
            location={input.education.location}
          />
        </div>
      </div>
    </>
  );
}

export default Body;