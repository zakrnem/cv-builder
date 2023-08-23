import "../styles/Education.css";

function Education({ toggleForm, numberFormVisible, handleInputChange, input }) {
  return (
    <div className="education">
      <div className="inputs-heading">
        <h2>Education</h2>
        <button
          onClick={() => toggleForm(3)}
          style={{
            transition: "transform 0.3s",
            transform: numberFormVisible !== 3 ? "" : "rotate(180deg)",
          }}
        >
          <img src="./src/assets/down-svgrepo-com.svg" />
        </button>
      </div>
      <form style={{ display: numberFormVisible === 3 ? "" : "none" }}>
        <label htmlFor="school">School</label>
        <input
          type="text"
          value={input.education.school}
          placeholder="Name of the School"
          onChange={(e) =>
            handleInputChange("education", "school", e.target.value)
          }
        />
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          value={input.education.degree}
          placeholder="Type your degree"
          onChange={(e) =>
            handleInputChange("education", "degree", e.target.value)
          }
        />
        <label htmlFor="startDate">Start Date</label>
        <input
          type="month"
          value={input.education.startDate}
          onChange={(e) =>
            handleInputChange("education", "startDate", e.target.value)
          }
        />
        <label htmlFor="endDate">End Date</label>
        <input
          type="month"
          value={input.education.endDate}
          onChange={(e) =>
            handleInputChange("education", "endDate", e.target.value)
          }
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          value={input.education.location}
          placeholder="Enter an address"
          onChange={(e) =>
            handleInputChange("education", "location", e.target.value)
          }
        />
      <button className="add-education">+ Education</button>
      </form>
    </div>
  );
}

export default Education;
