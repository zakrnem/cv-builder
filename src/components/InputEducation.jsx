import AddInstanceButton from "./AddInstanceButton";
import EducationForm from "./EducationForm";
import InputGroupHeading from "./InputGroupHeading";
import InstanceHeading from "./InstanceHeading";
import "../styles/InputEducation.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function InputEducation({
  toggleGroup,
  numberGroupVisible,
  educationInput,
  setEducationInput,
}) {
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

  const [numberFormVisible, setNumberFormVisible] = useState(0);

  const handleEditClick = (arg) => {
    if (arg !== numberFormVisible) setNumberFormVisible(arg);
  };

  const handleFormReturn = (e) => {
    e.preventDefault();
    setNumberFormVisible(0);
  };

  const handleFormDelete = (e, educationInstance) => {
    e.preventDefault();
    const newState = { ...educationInput };
    delete newState[educationInstance];
    setEducationInput(newState);
  };

  const handleNewEducation = () => {
    const index =educationInstances.length + 1
    handleEducationInputChange(index, "key", uuidv4());
    setEducationInstances([
      ...educationInstances,
      index,
    ]);
    setNumberFormVisible(index)
  };

/*   useEffect(() => {
    console.log(educationInput);
  }, [educationInput]);

  useEffect(() => {
    console.log(educationInstances);
  }, [educationInstances]); */

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
        const instance = educationInstances[index - 1];
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
