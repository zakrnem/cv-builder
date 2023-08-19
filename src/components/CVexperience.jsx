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
      <div className="date">Date</div>
      <div className="location">Location</div>
      <div className="company">Company Name</div>
      <div className="job-title">Job Title</div>
      <div className="description">Description</div>
    </div>
  );
}

export default CVexperience;
