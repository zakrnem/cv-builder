import "../styles/CVcontainer.css";
import PersonalDetails from "./PersonalDetails";
import InputExperience from "./InputExperience";
import Education from "./InputEducation";
import CVdetails from "./CVdetails";
import CVexperience from "./CVexperience";
import CVeducation from "./CVeducation";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

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
        "Experienced and diligent Janitorial Services Specialist with a proven track record of maintaining clean and organized environments. Adept at performing various cleaning tasks, adhering to safety protocols, and contributing to a positive team atmosphere. Possesses excellent attention to detail and the ability to work independently. Seeking to leverage skills and experience in providing exceptional janitorial services.",
      key: uuidv4(),
    },
    2: {
      company: "Apple Inc",
      position: "Custodian",
      startDate: "2001-09",
      endDate: "2011-08",
      location: "California",
      description:
        "Diligent and experienced Custodian with a proven track record of maintaining cleanliness and orderliness in various settings. Adept at performing a range of custodial tasks to ensure the upkeep and functionality of facilities. Strong attention to detail and a commitment to creating a safe and pleasant environment for occupants.",
      key: uuidv4(),
    },
  });
  const handleExperienceInputChange = (index, field, value) => {
    setExperienceInput((prevExperienceInput) => ({
      ...prevExperienceInput,
      [index]: {
        ...prevExperienceInput[index],
        [field]: value,
      },
    }));
  };
  const [experienceInstances, setExperienceInstances] = useState([1, 2]);

  const handleNewExperience = () => {
    console.log("New experiece");
  };

  useEffect(() => {
    console.log(experienceInput);
  }, [experienceInput]);

  const [educationInput, setEducationInput] = useState({
    1: {
      school: "Ken's High School",
      degree: "High School Diploma",
      startDate: "1985-01",
      endDate: "2000-04",
      location: "Monte Carlo",
      key: uuidv4(),
    },
    2: {
      school: "Thomas Tech School",
      degree: "Cleaning Technician",
      startDate: "2000-08",
      endDate: "2001-04",
      location: "Kuala Lumpur",
      key: uuidv4(),
    },
  });
  const handleEducationInputChange = (index, field, value) => {
    setEducationInput((prevEducationInput) => ({
      ...prevEducationInput,
      [index]: {
        ...prevEducationInput[index],
        [field]: value,
      },
    }));
  };
  const [educationInstances, setEducationInstances] = useState([1, 2]);

  useEffect(() => {
    console.log(educationInput);
  }, [educationInput]);

  const handleNewEducation = () => {
    console.log("New education");
  };

  return (
    <>
      <div className="inputs-container">
        {/*  <PersonalDetails
          toggleForm={toggleForm}
          numberFormVisible={numberFormVisible}
          handleInputChange={handleInputChange}
          input={input}
        /> */}

        <InputExperience
          toggleGroup={toggleGroup}
          numberGroupVisible={numberGroupVisible}
          handleExperienceInputChange={handleExperienceInputChange}
          experienceInput={experienceInput}
          handleNewExperience={handleNewExperience}
          experienceInstances={experienceInstances}
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

          <CVexperience experienceInput={experienceInput} />

          <CVeducation educationInput={educationInput} />
        </div>
      </div>
    </>
  );
}

export default Body;
