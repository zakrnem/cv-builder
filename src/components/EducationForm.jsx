function EducationForm({
  numberFormVisible,
  numberGroupVisible,
  handleInputChange,
  educationInput,
  handleFormReturn,
  handleFormDelete,
  educationInstance,
  isFormValid,
}) {
  return (
    <form
      style={{
        display:
          numberFormVisible === educationInstance && numberGroupVisible !== 0
            ? ""
            : "none",
      }}
    >
      <label htmlFor="school">
        School{" "}
        <p
          className="required-input"
          style={{ display: isFormValid ? "none" : "" }}
        >
          *Required
        </p>
      </label>

      <input
        type="text"
        value={educationInput.school}
        placeholder="Name of the School"
        onChange={(e) =>
          handleInputChange(educationInstance, "school", e.target.value)
        }
      />
      <label htmlFor="degree">
        Degree{" "}
        <p
          className="required-input"
          style={{ display: isFormValid ? "none" : "" }}
        >
          *Required
        </p>
      </label>
      <input
        type="text"
        value={educationInput.degree}
        placeholder="Type your degree"
        onChange={(e) =>
          handleInputChange(educationInstance, "degree", e.target.value)
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
        value={educationInput.startDate}
        onChange={(e) =>
          handleInputChange(educationInstance, "startDate", e.target.value)
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
        value={educationInput.endDate}
        onChange={(e) =>
          handleInputChange(educationInstance, "endDate", e.target.value)
        }
      />
      <label htmlFor="location">Location</label>
      <input
        type="text"
        value={educationInput.location}
        placeholder="Enter an address"
        onChange={(e) =>
          handleInputChange(educationInstance, "location", e.target.value)
        }
      />
      <p
        className="form-validation"
        style={{ display: isFormValid ? "none" : "" }}
      >
        Please enter all the required inputs.
      </p>
      <div className="form-buttons">
        <button onClick={(e) => handleFormDelete(e, educationInstance)}>
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

export default EducationForm;
