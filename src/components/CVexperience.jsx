import "../styles/CVexperience.css";

function CVexperience({
  company,
  position,
  startDate,
  endDate,
  location,
  description,
}) {
  return (
    <div className="cv-experience">
      <h3>Professional Experience</h3>
      <div className="cv-experience-container">
        <div className="date-location">
          <p>
            {startDate} - {endDate}
          </p>
          <p>{location}</p>
        </div>
        <div className="job-details">
          <p className="company">{company}</p>
          <p>{position}</p>
          <p className="description">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default CVexperience;
