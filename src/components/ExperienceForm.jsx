import "../styles/Experience.css";

function ExperienceForm({
  isFormVisible,
  handleExperienceInputChange,
  experienceInput,
  handleFormReturn,
  handleFormDelete,
  experienceInstance,
}) {
  return (
    <form style={{ display: isFormVisible ? "" : "none" }}>
      <label htmlFor="companyName">Company Name</label>
      <input
        type="text"
        value={experienceInput.company}
        placeholder="Your employer's name"
        onChange={(e) =>
          handleExperienceInputChange(experienceInstance, "company", e.target.value)
        }
      />
      <label htmlFor="positionTitle">Position Title</label>
      <input
        type="text"
        value={experienceInput.position}
        placeholder="Enter your role"
        onChange={(e) =>
          handleExperienceInputChange(experienceInstance, "position", e.target.value)
        }
      />
      <label htmlFor="startDate">Start Date</label>
      <input
        type="month"
        value={experienceInput.startDate}
        onChange={(e) =>
          handleExperienceInputChange(experienceInstance, "startDate", e.target.value)
        }
      />
      <label htmlFor="endDate">End Date</label>
      <input
        type="month"
        value={experienceInput.endDate}
        onChange={(e) =>
          handleExperienceInputChange(experienceInstance, "endDate", e.target.value)
        }
      />
      <label htmlFor="location">Location</label>
      <input
        type="text"
        value={experienceInput.location}
        placeholder="Type a landmark, city, or address"
        onChange={(e) =>
          handleExperienceInputChange(experienceInstance, "location", e.target.value)
        }
      />
      <label htmlFor="description">Description</label>
      <textarea
        value={experienceInput.description}
        rows={4}
        className="experience-description"
        onChange={(e) =>
          handleExperienceInputChange(experienceInstance, "description", e.target.value)
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
