import "../styles/CVexperience.css";
import CVexperienceContainer from "./CVexperienceContainer";

function CVexperience({ experienceInput }) {
  return (
    <div className="cv-experience">
      <h3>Professional Experience</h3>
      {Object.keys(experienceInput).map((index) => {
        const experience = experienceInput[index];
        return (
          <div key={experience.key}>
            <CVexperienceContainer
              company={experience.company}
              position={experience.position}
              startDate={experience.startDate}
              endDate={experience.endDate}
              location={experience.location}
              description={experience.description} 
            />
          </div>
        );
      })}
      
    </div>
  );
}

export default CVexperience;
