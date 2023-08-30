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
    <div className="education">
      <InputGroupHeading
        title={"Education"}
        toggleGroup={toggleGroup}
        numberGroupVisible={numberGroupVisible}
        groupIndex={3}
      />
      {Object.keys(educationInput).map((index) => {
        const education = educationInput[index];
        return (
          <div key={education.key}>
            <InstanceHeading
              title={education.school}
              handleEditClick={handleEditClick}
              numberGroupVisible={numberGroupVisible}
              isFormVisible={isFormVisible}
              groupIndex={3}
            />
            <EducationForm
              isFormVisible={isFormVisible}
              handleEducationInputChange={handleEducationInputChange}
              educationInput={education}
              handleFormReturn={handleFormReturn}
              handleFormDelete={handleFormDelete}
              educationInstance={educationInstances[index - 1]}
            />
          </div>
        );
      })}

      <AddInstanceButton
        className={'add-education'}
        buttonText={'+ Education'}
        handleNewInstance={handleNewEducation}
        numberGroupVisible={numberGroupVisible}
        isFormVisible={isFormVisible}
        groupIndex={3}
      />
    </div>
  );
}

export default InputEducation;
