import AddInstanceButton from "./AddInstanceButton";
import ExperienceForm from "./ExperienceForm";
import InputGroupHeading from "./InputGroupHeading";

function Experience({
  toggleForm,
  numberFormVisible,
  handleInputChange,
  input,
  experienceNewInstance,
}) {
  return (
    <div className="experience">
      <InputGroupHeading
        title={"Experience"}
        toggleForm={toggleForm}
        numberFormVisible={numberFormVisible}
      />
      <ExperienceForm
        toggleForm={toggleForm}
        numberFormVisible={numberFormVisible}
        handleInputChange={handleInputChange}
        input={input}
        experienceNewInstance={experienceNewInstance}
      />
      <AddInstanceButton
      experienceNewInstance={experienceNewInstance} />
    </div>
  );
}

export default Experience;
