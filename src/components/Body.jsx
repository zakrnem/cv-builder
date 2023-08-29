import "../styles/InputsContainer.css";
import "../styles/CVcontainer.css";
import PersonalDetails from "./PersonalDetails";
import Experience from "./Experience";
import Education from "./Education";
import CVdetails from "./CVdetails";
import CVexperience from "./CVexperience";
import CVeducation from "./CVeducation";
import { useState } from "react";

function Body() {
  const [numberGroupVisible, setNumberGroupVisible] = useState(2);
  const toggleGroup = (arg) => {
    arg === numberGroupVisible
      ? setNumberGroupVisible(0)
      : setNumberGroupVisible(arg);
  };

  const [input, setInput] = useState({
    details: {
      name: "John Doe",
      email: "email@email.com",
      phone: "123-456-7890",
      location: "Sri Lanka",
    },
    experience: {
      1: {
        company: "Umbrella Inc",
        position: "Janitor",
        startDate: "2021-06",
        endDate: "2023-08",
        location: "Qatar",
        description:
          "Experienced and diligent Janitorial Services Specialist with a proven track record of maintaining clean and organized environments. Adept at performing various cleaning tasks, adhering to safety protocols, and contributing to a positive team atmosphere. Possesses excellent attention to detail and the ability to work independently. Seeking to leverage skills and experience[experienceInstances[0]] in providing exceptional janitorial services.",
      },
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
  };

  const [experienceInput, setExperienceInput] = useState({
    1: {
      company: "Umbrella Inc",
      position: "Janitor",
      startDate: "2021-06",
      endDate: "2023-08",
      location: "Qatar",
      description:
        "Experienced and diligent Janitorial Services Specialist with a proven track record of maintaining clean and organized environments. Adept at performing various cleaning tasks, adhering to safety protocols, and contributing to a positive team atmosphere. Possesses excellent attention to detail and the ability to work independently. Seeking to leverage skills and experience[experienceInstances[0]] in providing exceptional janitorial services.",
    },
  })
  const handleExperienceInputChange = (index, field, value) => {
    setInput((prevExperienceInput) => ({
      ...prevExperienceInput,
      [index]: {
        ...prevExperienceInput[index],
        [field]: value,
      },
    }));
    console.log(experienceInput);
  };

  const [experienceInstances, setExperienceInstances] = useState([1]);
  //Create an array with just the indexes of the instances
  //and use it to create more identations on the input object.
  //The add experience[experienceInstances[0]] button will push indexes, and this index
  //will be used to store data on the input object.

  const handleNewExperience = () => {
    console.log('New experience[experienceInstances[0]]')
  }

  //console.log(experienceInput[1]);
  return (
    <>
      <div className="inputs-container">
        {/*  <PersonalDetails
          toggleForm={toggleForm}
          numberFormVisible={numberFormVisible}
          handleInputChange={handleInputChange}
          input={input}
        /> */}

        <Experience
          toggleGroup={toggleGroup}
          numberGroupVisible={numberGroupVisible}
          handleExperienceInputChange={handleExperienceInputChange}
          experienceInput={experienceInput}
          experienceInstances={experienceInstances}
          handleNewExperience={handleNewExperience}
        />

        {/*  <Education
          toggleForm={toggleForm}
          numberFormVisible={numberFormVisible}
          handleInputChange={handleInputChange}
          input={input}
        /> */}
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
            company={input.experience[experienceInstances[0]].company}
            position={input.experience[experienceInstances[0]].position}
            startDate={input.experience[experienceInstances[0]].startDate}
            endDate={input.experience[experienceInstances[0]].endDate}
            location={input.experience[experienceInstances[0]].location}
            description={input.experience[experienceInstances[0]].description}
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
