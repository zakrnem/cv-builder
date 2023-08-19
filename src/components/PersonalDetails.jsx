import "../styles/PersonalDetails.css";

function PersonalDetails({toggleForm, isFormVisible, handleInputChange, input}) { 
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
          onChange={(e) => handleInputChange("details", "name", e.target.value)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={input.details.email}
          onChange={(e) => handleInputChange("details", "email", e.target.value)}
        />
        <label htmlFor="phoneNumber">Phone number</label>
        <input
          type="tel"
          value={input.details.number}
          onChange={(e) => handleInputChange("details", "number", e.target.value)}
        />
        <label htmlFor="address">Address</label>
        <input
          type="text"
          value={input.details.address}
          onChange={(e) => handleInputChange("details", "address", e.target.value)}
        />
      </form>
    </div>
  );
}

export default PersonalDetails;
