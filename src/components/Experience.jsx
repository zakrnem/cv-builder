import AddInstanceButton from "./AddInstanceButton";
import ExperienceForm from "./ExperienceForm";
import InputGroupHeading from "./InputGroupHeading";
import InstanceHeading from "./InstanceHeading";
import "../styles/Experience.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Experience({
  toggleGroup,
  numberGroupVisible,
  handleExperienceInputChange,
  experienceInput,
  handleNewExperience,
  experienceInstances,
}) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const handleEditClick = () => {
    setIsFormVisible((prevIsFormVisible) => !prevIsFormVisible);
  };
  const handleFormReturn = (e) => {
    e.preventDefault();
    handleEditClick();
  };
  const handleFormDelete = (e) => {
    e.preventDefault();
    console.log("Delete form");
  };

  //console.log(experienceInstances[0])
  //console.log(experienceInput[experienceInstances[0]])
  return (
    <div className="experience">
      <InputGroupHeading
        title={"Experience"}
        toggleGroup={toggleGroup}
        numberGroupVisible={numberGroupVisible}
      />
      {Object.keys(experienceInput).map((index) => {
        const experience = experienceInput[index];
        const uniqueKey = uuidv4();

        return (
          <div key={uniqueKey}>
            <InstanceHeading
              title={experience.company}
              handleEditClick={handleEditClick}
              numberGroupVisible={numberGroupVisible}
              isFormVisible={isFormVisible}
            />
            <ExperienceForm
              isFormVisible={isFormVisible}
              handleInputChange={handleExperienceInputChange}
              experienceInput={experience}
              handleFormReturn={handleFormReturn}
              handleFormDelete={handleFormDelete}
              experienceInstance={index}
            />
          </div>
        );
      })}

      <AddInstanceButton
        handleNewExperience={handleNewExperience}
        numberGroupVisible={numberGroupVisible}
        isFormVisible={isFormVisible}
      />
    </div>
  );
}

export default Experience;
