import AddInstanceButton from "./AddInstanceButton";
import ExperienceForm from "./ExperienceForm";
import InputGroupHeading from "./InputGroupHeading";
import InstanceHeading from "./InstanceHeading";
import { useState } from "react";

function Experience({
  toggleGroup,
  numberGroupVisible,
  handleInputChange,
  input,
  experienceNewInstance,
}) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const handleEditClick = () => {
    setIsFormVisible((prevIsFormVisible) => !prevIsFormVisible);
  };
  const handleFormReturn = (e) => {
    e.preventDefault()
    handleEditClick()
  }
  const handleFormDelete = (e) => {
    e.preventDefault()
    console.log('Delete form')
  }

  return (
    <div className="experience">
      <InputGroupHeading
        title={"Experience"}
        toggleGroup={toggleGroup}
        numberGroupVisible={numberGroupVisible}
      />
      <InstanceHeading
        title={input.experience.company}
        handleEditClick={handleEditClick}
        numberGroupVisible={numberGroupVisible}
        isFormVisible={isFormVisible}
      />
      <ExperienceForm
        isFormVisible={isFormVisible}
        handleInputChange={handleInputChange}
        input={input}
        handleFormReturn={handleFormReturn}
        handleFormDelete={handleFormDelete}
      />
      <AddInstanceButton
        experienceNewInstance={experienceNewInstance}
        numberGroupVisible={numberGroupVisible}
        isFormVisible={isFormVisible}
      />
    </div>
  );
}

export default Experience;
