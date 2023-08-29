import "../styles/CVexperience.css";
import CVexperienceInstance from "./CVexperienceInstance";

function CVexperience({ experienceInput }) {
  return (
    <div className="cv-experience">
      <h3>Professional Experience</h3>
      {Object.keys(experienceInput).map((index) => {
        const experience = experienceInput[index];
        return (
          <div key={experience.key}>
            <CVexperienceInstance
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
