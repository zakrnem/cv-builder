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
      <h2>Professional Experience</h2>
      <div className="date">{startDate} - {endDate}</div>
      <div className="location">{location}</div>
      <div className="company">{company}</div>
      <div className="job-title">{position}</div>
      <div className="description">{description}</div>
    </div>
  );
}

export default CVexperience;
