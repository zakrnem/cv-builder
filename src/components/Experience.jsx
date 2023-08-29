import AddInstanceButton from "./AddInstanceButton";
import ExperienceForm from "./ExperienceForm";
import InputGroupHeading from "./InputGroupHeading";
import InstanceHeading from "./InstanceHeading";
import { useState } from "react";

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
  const title = experienceInput[experienceInstances[0]].company

  //console.log(experienceInstances[0])
  //console.log(experienceInput[experienceInstances[0]])
  return (
    <div className="experience">
      <InputGroupHeading
        title={"Experience"}
        toggleGroup={toggleGroup}
        numberGroupVisible={numberGroupVisible}
      />
      <InstanceHeading
        title={title}
        handleEditClick={handleEditClick}
        numberGroupVisible={numberGroupVisible}
        isFormVisible={isFormVisible}
      />
      <ExperienceForm
        isFormVisible={isFormVisible}
        handleInputChange={handleExperienceInputChange}
        experienceInput={experienceInput[experienceInstances[0]]}
        handleFormReturn={handleFormReturn}
        handleFormDelete={handleFormDelete}
        experienceInstance={experienceInstances[0]}
      />
      <AddInstanceButton
        handleNewExperience={handleNewExperience}
        numberGroupVisible={numberGroupVisible}
        isFormVisible={isFormVisible}
      />
    </div>
  );
}

export default Experience;
