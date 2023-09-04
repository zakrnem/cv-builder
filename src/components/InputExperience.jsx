import AddInstanceButton from "./AddInstanceButton";
import ExperienceForm from "./ExperienceForm";
import InputGroupHeading from "./InputGroupHeading";
import InstanceHeading from "./InstanceHeading";
import "../styles/InputExperience.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function InputExperience({
  toggleGroup,
  numberGroupVisible,
  experienceInput,
  setExperienceInput,
}) {
  const handleInputChange = (index, field, value) => {
    setExperienceInput((prevExperienceInput) => ({
      ...prevExperienceInput,
      [index]: {
        ...prevExperienceInput[index],
        [field]: value,
      },
    }));
  };

  const [experienceInstances, setExperienceInstances] = useState([1, 2]);

  const [numberFormVisible, setNumberFormVisible] = useState(0);

  const handleEditClick = (arg) => {
    console.log(isLastInstanceValid())
    if (isLastInstanceValid()) {
      if (arg !== numberFormVisible) setNumberFormVisible(arg);
    }
  };

  const [isFormValid, setIsFormValid] = useState(true);

  const handleFormReturn = (e) => {
    e.preventDefault();
    if (isLastInstanceValid()) {
      setNumberFormVisible(0);
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const isLastInstanceValid = () => {
    const objLength = Object.keys(experienceInput).length;
    const lastInstanceIndex = Object.keys(experienceInput)[objLength-1]
    const lastInstance = experienceInput[lastInstanceIndex];
    
    let checkCount = 0;
    for (let key in lastInstance) {
      switch (true) {
        case key === "company":
          checkCount++;
          break;
        case key === "position":
          checkCount++;
          break;
        case key === "startDate":
          checkCount++;
          break;
        case key === "endDate":
          checkCount++;
          break;
      }
    }
    return checkCount === 4 ? true : false;
  };

  const handleFormDelete = (e, experienceInstance) => {
    e.preventDefault();
    const newExperienceInput = { ...experienceInput };
    delete newExperienceInput[experienceInstance];
    setExperienceInput(newExperienceInput);

    const instancesArray = Object.keys(experienceInstances).map(
      (key) => experienceInstances[key]
    );
    const newArray = instancesArray.filter((el) => el !== experienceInstance);
    setExperienceInstances(newArray);

    setIsFormValid(true);
  };

  const handleNewInstance = () => {
    const index = experienceInstances.length + 1;
    if (isLastInstanceValid()) {
      handleInputChange(index, "key", uuidv4());
      setExperienceInstances([...experienceInstances, index]);
      setNumberFormVisible(index);
    }
  };

      useEffect(() => {
    console.log(experienceInput);
  }, [experienceInput]);

  useEffect(() => {
    console.log(experienceInstances);
  }, [experienceInstances]);

  return (
    <div className="experience">
      <InputGroupHeading
        title={"Experience"}
        toggleGroup={toggleGroup}
        numberGroupVisible={numberGroupVisible}
        groupIndex={2}
      />
      {Object.keys(experienceInput).map((index) => {
        const experience = experienceInput[index];
        const newIndex = experienceInstances.length > 1 ? index - 1 : 0;
        const instance = experienceInstances[newIndex];
        return (
          <div key={experience.key}>
            <InstanceHeading
              title={experience.company}
              handleEditClick={handleEditClick}
              numberGroupVisible={numberGroupVisible}
              groupIndex={2}
              instance={instance}
            />
            <ExperienceForm
              numberFormVisible={numberFormVisible}
              numberGroupVisible={numberGroupVisible}
              handleInputChange={handleInputChange}
              experienceInput={experience}
              handleFormReturn={handleFormReturn}
              handleFormDelete={handleFormDelete}
              experienceInstance={instance}
              isFormValid={isFormValid}
            />
          </div>
        );
      })}

      <AddInstanceButton
        buttonText={"+ Experience"}
        handleNewInstance={handleNewInstance}
        numberGroupVisible={numberGroupVisible}
        groupIndex={2}
      />
    </div>
  );
}

export default InputExperience;
