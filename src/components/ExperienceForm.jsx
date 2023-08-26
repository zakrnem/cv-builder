import "../styles/Experience.css";

function ExperienceForm({ isFormVisible, handleInputChange, input, handleFormReturn, handleFormDelete }) {
  return (
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
      <textarea
        value={input.experience.description}
        rows={4}
        className="experience-description"
        onChange={(e) =>
          handleInputChange("experience", "description", e.target.value)
        }
      />
      <div className="form-buttons">
      <button onClick={handleFormDelete}>Delete</button>
        <button onClick={handleFormReturn}>Back</button>
      </div>
    </form>
  );
}

export default ExperienceForm;
