import AddInstanceButton from "./AddInstanceButton";
import EducationForm from "./EducationForm";
import InputGroupHeading from "./InputGroupHeading";
import InstanceHeading from "./InstanceHeading";
import "../styles/InputEducation.css";
import { useState } from "react";

function InputEducation({
  toggleGroup,
  numberGroupVisible,
  handleEducationInputChange,
  educationInput,
  handleNewEducation,
  educationInstances,
}) {
  const [numberFormVisible, setNumberFormVisible] = useState(0);
  const editForm = (arg) => {
    arg === numberFormVisible
      ? setNumberFormVisible(0)
      : setNumberFormVisible(arg);
  };
  const handleEditClick = (arg) => {
    editForm(arg);
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
    <div className="education">
      <InputGroupHeading
        title={"Education"}
        toggleGroup={toggleGroup}
        numberGroupVisible={numberGroupVisible}
        groupIndex={3}
      />
      {Object.keys(educationInput).map((index) => {
        const education = educationInput[index];
        const instance = educationInstances[index - 1]
        return (
          <div key={education.key}>
            <InstanceHeading
              title={education.school}
              handleEditClick={handleEditClick}
              numberGroupVisible={numberGroupVisible}
              groupIndex={3}
              educationInstance={instance}
            />
            <EducationForm
              numberFormVisible={numberFormVisible}
              numberGroupVisible={numberGroupVisible}
              handleEducationInputChange={handleEducationInputChange}
              educationInput={education}
              handleFormReturn={handleFormReturn}
              handleFormDelete={handleFormDelete}
              educationInstance={instance}
            />
          </div>
        );
      })}
      <AddInstanceButton
        className={"add-education"}
        buttonText={"+ Education"}
        handleNewInstance={handleNewEducation}
        numberGroupVisible={numberGroupVisible}
        groupIndex={3}
      />
    </div>
  );
}

export default InputEducation;
