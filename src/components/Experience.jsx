import "../styles/Experience.css";

function Experience({ toggleForm, numberFormVisible, handleInputChange, input }) {
  return (
    <div className="experience">
      <div className="inputs-heading">
        <h2>Experience</h2>
        <button
          onClick={() => toggleForm(2)}
          style={{
            transition: "transform 0.3s",
            transform: numberFormVisible !== 2 ? "" : "rotate(180deg)",
          }}
        >
          <img src="./src/assets/down-svgrepo-com.svg" />
        </button>
      </div>
      <form style={{ display: numberFormVisible === 2 ? "" : "none" }}>
        <label htmlFor="companyName">Company Name</label>
        <input
          type="text"
          value={input.experience.company}
          placeholder="Your employer's name"
          onChange={(e) =>
            handleInputChange("experience", "company", e.target.value)
          }
        />
        <label htmlFor="positionTitle">Position Title</label>
        <input
          type="text"
          value={input.experience.position}
          placeholder="Enter your role"
          onChange={(e) =>
            handleInputChange("experience", "position", e.target.value)
          }
        />
        <label htmlFor="startDate">Start Date</label>
        <input
          type="month"
          value={input.experience.startDate}
          onChange={(e) =>
            handleInputChange("experience", "startDate", e.target.value)
          }
        />
        <label htmlFor="endDate">End Date</label>
        <input
          type="month"
          value={input.experience.endDate}
          onChange={(e) =>
            handleInputChange("experience", "endDate", e.target.value)
          }
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          value={input.experience.location}
          placeholder="Type a landmark, city, or address"
          onChange={(e) =>
            handleInputChange("experience", "location", e.target.value)
          }
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          value={input.experience.description}
          onChange={(e) =>
            handleInputChange("experience", "description", e.target.value)
          }
        />
      </form>
    </div>
  );
}

export default Experience;
