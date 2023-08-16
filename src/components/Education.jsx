import { useState } from "react";
import "../styles/Education.css";

function Education() {
  const [input, setInput] = useState({
    school: "",
    degree: "",
    startDate: "",
    endDate: "",
    location: "",
  });
  const [isFormVisible, setIsFormVisible] = useState(false);

  const handleInputChange = (field, value) => {
    setInput((prevInput) => ({
      ...prevInput,
      [field]: value,
    }));
    console.log(input);
  };
  const toggleForm = () => {
    setIsFormVisible((prevIsFormVisible) => !prevIsFormVisible);
  };
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
          value={input.school}
          onChange={(e) => handleInputChange("school", e.target.value)}
        />
        <label htmlFor="degree">Degree</label>
        <input
          type="text"
          value={input.degree}
          onChange={(e) => handleInputChange("degree", e.target.value)}
        />
        <label htmlFor="startDate">Start Date</label>
        <input
          type="date"
          value={input.startDate}
          onChange={(e) => handleInputChange("startDate", e.target.value)}
        />
        <label htmlFor="endDate">End Date</label>
        <input
          type="date"
          value={input.endDate}
          onChange={(e) => handleInputChange("endDate", e.target.value)}
        />
        <label htmlFor="location">Location</label>
        <input
          type="text"
          value={input.location}
          onChange={(e) => handleInputChange("location", e.target.value)}
        />
      </form>
    </div>
  );
}

export default Education;
