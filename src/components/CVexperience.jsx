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
      <div className="cv-experience-grid">
        <div>Date</div>
        <div>Location</div>
        <div>Company Name</div>
        <div>Job Title</div>
        <div>Description</div>
      </div>
    </div>
  );
}

export default CVexperience;
