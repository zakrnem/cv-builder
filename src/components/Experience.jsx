import AddInstanceButton from "./AddInstanceButton";
import ExperienceForm from "./ExperienceForm";
import InputGroupHeading from "./InputGroupHeading";
import InstanceHeading from "./InstanceHeading";

function Experience({
  toggleGroup,
  numberGroupVisible,
  handleInputChange,
  input,
  experienceNewInstance,
}) {
  const handleEditClick = () => {
    console.log("Edit experience");
  };
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
      />
      {/* <ExperienceForm
        toggleForm={toggleForm}
        numberFormVisible={numberFormVisible}
        handleInputChange={handleInputChange}
        input={input}
        experienceNewInstance={experienceNewInstance}
      /> */}
      <AddInstanceButton
        experienceNewInstance={experienceNewInstance}
        numberGroupVisible={numberGroupVisible}
      />
    </div>
  );
}

export default Experience;
