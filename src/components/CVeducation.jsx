import "../styles/CVeducation.css";
import CVeducationInstance from "./CVeducationInstance";

function CVeducation({ educationInput }) {
  return (
    <div className="cv-education">
      <h3>Education</h3>
      {Object.keys(educationInput).map((index) => {
        const education = educationInput[index];
        return (
          <div key={education.key}>
            <CVeducationInstance
              school={education.school}
              degree={education.degree}
              startDate={education.startDate}
              endDate={education.endDate}
              location={education.location}
            />
          </div>
        );
      })}
    </div>
  );
}

export default CVeducation;
