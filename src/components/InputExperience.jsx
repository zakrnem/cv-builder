import AddInstanceButton from "./AddInstanceButton";
import ExperienceForm from "./ExperienceForm";
import InputGroupHeading from "./InputGroupHeading";
import InstanceHeading from "./InstanceHeading";
import "../styles/InputExperience.css";
import { useState } from "react";

function InputExperience({
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

  return (
    <div className="experience">
      <InputGroupHeading
        title={"Experience"}
        toggleGroup={toggleGroup}
        numberGroupVisible={numberGroupVisible}
      />
      {Object.keys(experienceInput).map((index) => {
        const experience = experienceInput[index];
        return (
          <div key={experience.key}>
            <InstanceHeading
              title={experience.company}
              handleEditClick={handleEditClick}
              numberGroupVisible={numberGroupVisible}
              isFormVisible={isFormVisible}
            />
            <ExperienceForm
              isFormVisible={isFormVisible}
              handleExperienceInputChange={handleExperienceInputChange}
              experienceInput={experience}
              handleFormReturn={handleFormReturn}
              handleFormDelete={handleFormDelete}
              experienceInstance={experienceInstances[index - 1]}
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

export default InputExperience;