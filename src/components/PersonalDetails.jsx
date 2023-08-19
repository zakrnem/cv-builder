import "../styles/PersonalDetails.css";

function PersonalDetails({
  toggleForm,
  isFormVisible,
  handleInputChange,
  input,
}) {
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
          value={input.details.name}
          placeholder="John Doe"
          onChange={(e) => handleInputChange("details", "name", e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={input.details.email}
          placeholder="email@email.com"
          onChange={(e) =>
            handleInputChange("details", "email", e.target.value)
          }
        />
        <label htmlFor="phoneNumber">Phone number</label>
        <input
          type="tel"
          value={input.details.number}
          placeholder="+0 000 000"
          onChange={(e) =>
            handleInputChange("details", "number", e.target.value)
          }
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          value={input.details.address}
          placeholder="Enter your city or postal code"
          onChange={(e) =>
            handleInputChange("details", "address", e.target.value)
          }
        />
      </form>
    </div>
  );
}

export default PersonalDetails;
