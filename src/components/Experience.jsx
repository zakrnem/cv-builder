import "../styles/Experience.css";

function Experience({ toggleForm, isFormVisible, handleInputChange, input }) {
  return (
    <div className="experience">
      <div className="inputs-heading">
        <h2>Experience</h2>
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
          value={input.experience.positon}
          placeholder="Enter your role"
          onChange={(e) =>
            handleInputChange("experience", "position", e.target.value)
          }
        />
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          value={input.experience.startDate}
          onChange={(e) =>
            handleInputChange("experience", "startDate", e.target.value)
          }
        />
        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
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
