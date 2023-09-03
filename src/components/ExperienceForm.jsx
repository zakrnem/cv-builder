import "../styles/ExperienceForm.css";

function ExperienceForm({
  numberFormVisible,
  numberGroupVisible,
  handleInputChange,
  experienceInput,
  handleFormReturn,
  handleFormDelete,
  experienceInstance,
  isFormValid,
}) {
  return (
    <form
      style={{
        display:
          numberFormVisible === experienceInstance && numberGroupVisible !== 0
            ? ""
            : "none",
      }}
    >
      <label htmlFor="companyName">
        Company Name{" "}
        <p
          className="required-input"
          style={{ display: isFormValid ? "none" : "" }}
        >
          *Required
        </p>
      </label>
      <input
        type="text"
        value={experienceInput.company}
        placeholder="Your employer's name"
        onChange={(e) =>
          handleInputChange(experienceInstance, "company", e.target.value)
        }
      />
      <label htmlFor="positionTitle">
        Position Title{" "}
        <p
          className="required-input"
          style={{ display: isFormValid ? "none" : "" }}
        >
          *Required
        </p>
      </label>
      <input
        type="text"
        value={experienceInput.position}
        placeholder="Enter your role"
        onChange={(e) =>
          handleInputChange(experienceInstance, "position", e.target.value)
        }
      />
      <label htmlFor="startDate">
        Start Date{" "}
        <p
          className="required-input"
          style={{ display: isFormValid ? "none" : "" }}
        >
          *Required
        </p>
      </label>
      <input
        type="month"
        value={experienceInput.startDate}
        onChange={(e) =>
          handleInputChange(experienceInstance, "startDate", e.target.value)
        }
      />
      <label htmlFor="endDate">
        End Date{" "}
        <p
          className="required-input"
          style={{ display: isFormValid ? "none" : "" }}
        >
          *Required
        </p>
      </label>
      <input
        type="month"
        value={experienceInput.endDate}
        onChange={(e) =>
          handleInputChange(experienceInstance, "endDate", e.target.value)
        }
      />
      <label htmlFor="location">Location</label>
      <input
        type="text"
        value={experienceInput.location}
        placeholder="Type a landmark, city, or address"
        onChange={(e) =>
          handleInputChange(experienceInstance, "location", e.target.value)
        }
      />
      <label htmlFor="description">Description</label>
      <textarea
        value={experienceInput.description}
        rows={4}
        className="experience-description"
        onChange={(e) =>
          handleInputChange(experienceInstance, "description", e.target.value)
        }
      />
      <p
        className="form-validation"
        style={{ display: isFormValid ? "none" : "" }}
      >
        Please enter all the required inputs.
      </p>
      <div className="form-buttons">
        <button onClick={(e) => handleFormDelete(e, experienceInstance)}>
          <img
            src="./src/assets/delete-2-svgrepo-com.svg"
            className="delete-logo"
          />
          Delete
        </button>
        <button onClick={handleFormReturn}>
          <img
            src="./src/assets/return-svgrepo-com.svg"
            className="return-logo"
          />
          Back
        </button>
      </div>
    </form>
  );
}

export default ExperienceForm;
