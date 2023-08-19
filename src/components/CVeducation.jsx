import "../styles/CVeducation.css";

function CVeducation({ school, degree, startDate, endDate, location }) {
  return (
    <div className="cv-education">
      <h2>Education</h2>
      <div className="cv-education-container">
        <div className="date-location">
          <p>
            {startDate} - {endDate}
          </p>
          <p>{location}</p>
        </div>
        <div className="school-degree">
          <p>{school}</p>
          <p>{degree}</p>
        </div>
      </div>
    </div>
  );
}

export default CVeducation;
