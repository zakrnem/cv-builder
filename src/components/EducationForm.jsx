function EducationForm({
  numberFormVisible,
  numberGroupVisible,
  handleEducationInputChange,
  educationInput,
  handleFormReturn,
  handleFormDelete,
  educationInstance,
  educationFormValid,
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
          style={{ display: educationFormValid ? "none" : "" }}
        >
          *Required
        </p>
      </label>

      <input
        type="text"
        value={educationInput.school}
        placeholder="Name of the School"
        onChange={(e) =>
          handleEducationInputChange(
            educationInstance,
            "school",
            e.target.value
          )
        }
      />
      <label htmlFor="degree">
        Degree{" "}
        <p
          className="required-input"
          style={{ display: educationFormValid ? "none" : "" }}
        >
          *Required
        </p>
      </label>
      <input
        type="text"
        value={educationInput.degree}
        placeholder="Type your degree"
        onChange={(e) =>
          handleEducationInputChange(
            educationInstance,
            "degree",
            e.target.value
          )
        }
      />
      <label htmlFor="startDate">
        Start Date{" "}
        <p
          className="required-input"
          style={{ display: educationFormValid ? "none" : "" }}
        >
          *Required
        </p>
      </label>
      <input
        type="month"
        value={educationInput.startDate}
        onChange={(e) =>
          handleEducationInputChange(
            educationInstance,
            "startDate",
            e.target.value
          )
        }
      />
      <label htmlFor="endDate">
        End Date{" "}
        <p
          className="required-input"
          style={{ display: educationFormValid ? "none" : "" }}
        >
          *Required
        </p>
      </label>
      <input
        type="month"
        value={educationInput.endDate}
        onChange={(e) =>
          handleEducationInputChange(
            educationInstance,
            "endDate",
            e.target.value
          )
        }
      />
      <label htmlFor="location">Location</label>
      <input
        type="text"
        value={educationInput.location}
        placeholder="Enter an address"
        onChange={(e) =>
          handleEducationInputChange(
            educationInstance,
            "location",
            e.target.value
          )
        }
      />
      <p
        className="form-validation"
        style={{ display: educationFormValid ? "none" : "" }}
      >
        Please enter all the required inputs.
      </p>
      <div className="form-buttons">
        <button onClick={(e) => handleFormDelete(e, educationInstance)}>
          Delete
        </button>
        <button type="submit" onClick={handleFormReturn}>
          Back
        </button>
      </div>
    </form>
  );
}

export default EducationForm;
