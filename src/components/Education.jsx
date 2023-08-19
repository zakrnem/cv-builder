import "../styles/Education.css";

function Education({toggleForm, isFormVisible, handleInputChange, input}) {
  return (
    <div className="education">
      <div className="inputs-heading">
        <h2>Education</h2>
        <button
          onClick={toggleForm}
          style={{
            transition: "transform 0.3s",
            transform: isFormVisible ? "" : "rotate(180deg)",
          }}
        >
          <img src="./src/assets/down-svgrepo-com.svg" />
        </button>
      </div>
      <form style={{ display: isFormVisible ? "" : "none" }}>
        <label htmlFor="school">School</label>
        <input
          type="text"
          value={input.education.school}
          onChange={(e) => handleInputChange("education", "school", e.target.value)}
        />
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          value={input.education.degree}
          onChange={(e) => handleInputChange("education", "degree", e.target.value)}
        />
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          value={input.education.startDate}
          onChange={(e) => handleInputChange("education", "startDate", e.target.value)}
        />
        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          value={input.education.endDate}
          onChange={(e) => handleInputChange("education", "endDate", e.target.value)}
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          value={input.education.location}
          onChange={(e) => handleInputChange("education", "location", e.target.value)}
        />
      </form>
    </div>
  );
}

export default Education;
