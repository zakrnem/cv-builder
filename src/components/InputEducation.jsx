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
    if (isLastInstanceValid()) {
      if (arg !== numberFormVisible) setNumberFormVisible(arg);
    }
  };

  const [educationFormValid, setEducationFormValid] = useState(true);

  const handleFormReturn = (e) => {
    e.preventDefault();
    isLastInstanceValid()
      ? setNumberFormVisible(0)
      : setEducationFormValid(false);
  };

  const isLastInstanceValid = () => {
    const currentIndex = Object.keys(educationInput).length;
    const lastInstance = educationInput[currentIndex];

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

    setEducationFormValid(true);
  };

  const handleNewEducation = () => {
    const index = educationInstances.length + 1;
    handleEducationInputChange(index, "key", uuidv4());
    setEducationInstances([...educationInstances, index]);
    setNumberFormVisible(index);
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
        const newIndex = educationInstances.length > 1 ? index - 1 : 0;
        const instance = educationInstances[newIndex];
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
              educationFormValid={educationFormValid}
            />
          </div>
        );
      })}
      <AddInstanceButton
        buttonText={"+ Education"}
        handleNewInstance={handleNewEducation}
        numberGroupVisible={numberGroupVisible}
        groupIndex={3}
      />
    </div>
  );
}

export default InputEducation;
