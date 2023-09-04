import "../styles/CVdetails.css";

function CVdetails({ detailsInput }) {
  return (
    <div className="cv-personal-details">
      <h2>{detailsInput.name}</h2>
      <div className="cv-details">
        <div className="email">
          <img src="./src/assets/mail-svgrepo-com.svg" className="icon" />
          {detailsInput.email}
        </div>
        <div className="phone">
          <img src="./src/assets/phone-svgrepo-com.svg" className="icon" />
          {detailsInput.phone}
        </div>
        <div className="location">
          <img
            src="./src/assets/location-pin-svgrepo-com.svg"
            className="icon"
          />
          {detailsInput.location}
        </div>
      </div>
    </div>
  );
}

export default CVdetails;
