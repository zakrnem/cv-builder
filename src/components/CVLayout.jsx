import "../styles/CVLayout.css";

function CVLayout() {
  return (
    <div className="cv-container">
      <div className="cv-personal-details">
        <h2>Full name</h2>
        <div className="cv-details">
          <img src="./src/assets/mail-svgrepo-com.svg" className="icon" />
          <div className="email">Email</div>

          <img src="./src/assets/phone-svgrepo-com.svg" className="icon" />
          <div className="phone">+123 0000 0000</div>

          <img
            src="./src/assets/location-pin-svgrepo-com.svg"
            className="icon"
          />
          <div className="location">Location</div>
        </div>
      </div>
    </div>
  );
}

export default CVLayout;
