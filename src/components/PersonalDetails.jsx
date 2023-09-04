import "../styles/PersonalDetails.css";

function PersonalDetails({
  toggleGroup,
  numberGroupVisible,
  input,
  setInput,
}) {
  const handleInputChange = (field, value) => {
    setInput((prevInput) => ({
      ...prevInput,
        [field]: value,
      }));
  };
  return (
    <div className="personal-details">
      <div className="inputs-heading">
        <h2>Personal Details</h2>
        <button
          onClick={() => toggleGroup(1)}
          style={{
            transition: "transform 0.3s",
            transform: numberGroupVisible !== 1 ? "" : "rotate(180deg)",
          }}
        >
          <img src="./src/assets/down-svgrepo-com.svg" />
        </button>
      </div>
      <form style={{ display: numberGroupVisible === 1 ? "" : "none" }}>
        <label htmlFor="fullName">Full name</label>
        <input
          type="text"
          value={input.name}
          placeholder="John Doe"
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={input.email}
          placeholder="email@email.com"
          onChange={(e) =>
            handleInputChange("email", e.target.value)
          }
        />
        <label htmlFor="phoneNumber">Phone number</label>
        <input
          type="tel"
          value={input.phone}
          placeholder="+0 000 000"
          onChange={(e) =>
            handleInputChange("phone", e.target.value)
          }
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          value={input.location}
          placeholder="Enter your city or postal code"
          onChange={(e) =>
            handleInputChange("location", e.target.value)
          }
        />
      </form>
    </div>
  );
}

export default PersonalDetails;
