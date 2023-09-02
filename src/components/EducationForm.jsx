import "../styles/EducationForm.css";

function EducationForm({
  numberFormVisible,
  numberGroupVisible,
  handleEducationInputChange,
  educationInput,
  handleFormReturn,
  handleFormDelete,
  educationInstance,
}) 

{
  console.log('edInst: ', educationInstance)
  return (
    <form
      style={{
        display:
          numberFormVisible === educationInstance && numberGroupVisible !== 0
            ? ""
            : "none",
      }}
    >
      <label htmlFor="school">School</label>
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
      <label htmlFor="degree">Degree</label>
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
      <label htmlFor="startDate">Start Date</label>
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
      <label htmlFor="endDate">End Date</label>
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
      <div className="form-buttons">
        <button onClick={(e) => handleFormDelete(e, educationInstance)}>
          Delete
        </button>
        <button onClick={handleFormReturn}>Back</button>
      </div>
    </form>
  );
}

export default EducationForm;
