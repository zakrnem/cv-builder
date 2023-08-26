import AddInstanceButton from "./AddInstanceButton";
import ExperienceForm from "./ExperienceForm";
import InputGroupHeading from "./InputGroupHeading";
import InstanceHeading from "./InstanceHeading";

function Experience({
  toggleForm,
  numberFormVisible,
  handleInputChange,
  input,
  experienceNewInstance,
}) {
    const handleEditClick = () => {
        console.log('Edit experience')
    }
  return (
    <div className="experience">
      <InputGroupHeading
        title={"Experience"}
        toggleForm={toggleForm}
        numberFormVisible={numberFormVisible}
      />
      <InstanceHeading 
      title={input.experience.company}
      handleEditClick={handleEditClick}/>
      <ExperienceForm
        toggleForm={toggleForm}
        numberFormVisible={numberFormVisible}
        handleInputChange={handleInputChange}
        input={input}
        experienceNewInstance={experienceNewInstance}
      />
      <AddInstanceButton experienceNewInstance={experienceNewInstance} />
    </div>
  );
}

export default Experience;
