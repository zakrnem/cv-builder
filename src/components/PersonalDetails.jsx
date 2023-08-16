import { useState } from "react";
import "../styles/PersonalDetails.css";

function PersonalDetails() {
  const [input, setInput] = useState({
    name: "",
    email: "",
    number: "",
    address: "",
  });
  const [isFormVisible, setIsFormVisible] = useState(true);

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
    <div className="personal-details">
      <div className="inputs-heading">
        <h2>Personal Details</h2>
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
        <label htmlFor="fullName">Full name</label>
        <input
          type="text"
          value={input.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={input.email}
          onChange={(e) => handleInputChange("email", e.target.value)}
        />
        <label htmlFor="phoneNumber">Phone number</label>
        <input
          type="tel"
          value={input.number}
          onChange={(e) => handleInputChange("number", e.target.value)}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          value={input.address}
          onChange={(e) => handleInputChange("address", e.target.value)}
        />
      </form>
    </div>
  );
}

export default PersonalDetails;
