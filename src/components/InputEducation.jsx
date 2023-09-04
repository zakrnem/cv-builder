import AddInstanceButton from "./AddInstanceButton";
import EducationForm from "./EducationForm";
import InputGroupHeading from "./InputGroupHeading";
import InstanceHeading from "./InstanceHeading";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

function InputEducation({
  toggleGroup,
  numberGroupVisible,
  educationInput,
  setEducationInput,
}) {
  const handleInputChange = (index, field, value) => {
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
    const objLength = Object.keys(educationInput).length;
    const lastInstanceIndex = Object.keys(educationInput)[objLength-1]
    const lastInstance = educationInput[lastInstanceIndex];

    let checkCount = 0;
    for (let key in lastInstance) {
      switch (true) {
        case key === "school":
          checkCount++;
          break;
        case key === "degree":
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

  const handleFormDelete = (e, educationInstance) => {
    e.preventDefault();
    const newEducationInput = { ...educationInput };
    delete newEducationInput[educationInstance];
    setEducationInput(newEducationInput);

    const instancesArray = Object.keys(educationInstances).map(
      (key) => educationInstances[key]
    );
    const newArray = instancesArray.filter((el) => el !== educationInstance);
    setEducationInstances(newArray);

    setIsFormValid(true);
  };

  const handleNewInstance = () => {
    const objLength = Object.keys(educationInput).length;
    const lastInstanceIndex = Object.keys(educationInput)[objLength-1]
    const index = parseInt(lastInstanceIndex) + 1;
    if (isLastInstanceValid()) {
      handleInputChange(index, "key", uuidv4());
      setEducationInstances([...educationInstances, index]);
      setNumberFormVisible(index);
    }
  };

  /*     useEffect(() => {
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
        const instance = parseInt(index)
        return (
          <div key={education.key}>
            <InstanceHeading
              title={education.school}
              handleEditClick={handleEditClick}
              numberGroupVisible={numberGroupVisible}
              groupIndex={3}
              instance={instance}
            />
            <EducationForm
              numberFormVisible={numberFormVisible}
              numberGroupVisible={numberGroupVisible}
              handleInputChange={handleInputChange}
              educationInput={education}
              handleFormReturn={handleFormReturn}
              handleFormDelete={handleFormDelete}
              educationInstance={instance}
              isFormValid={isFormValid}
            />
          </div>
        );
      })}
      <AddInstanceButton
        buttonText={"+ Education"}
        handleNewInstance={handleNewInstance}
        numberGroupVisible={numberGroupVisible}
        groupIndex={3}
      />
    </div>
  );
}

export default InputEducation;
