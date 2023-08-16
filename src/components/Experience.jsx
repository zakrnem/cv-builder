import { useState } from "react";
import "../styles/Experience.css";

function Experience() {
  const [input, setInput] = useState({
    company: "",
    position: "",
    startDate: "",
    endDate: "",
    location: "",
    description: "",
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
    <div className="experience">
      <div className="experience-heading">
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
          value={input.company}
          onChange={(e) => handleInputChange("company", e.target.value)}
        />
        <label htmlFor="positionTitle">Position Title</label>
        <input
          type="text"
          value={input.positon}
          onChange={(e) => handleInputChange("position", e.target.value)}
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
        <label htmlFor="description">Description</label>
        <input
          type="text"
          value={input.description}
          onChange={(e) => handleInputChange("description", e.target.value)}
        />
      </form>
    </div>
  );
}

export default Experience;
