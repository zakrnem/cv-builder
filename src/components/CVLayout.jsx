import "../styles/CVLayout.css";

function CVLayout() {
  return (
    <div className="cv-container">
      <div className="cv-personal-details">
        <h2>Full name</h2>
        <div className="cv-details">
          <div className="email">
            <img src="./src/assets/mail-svgrepo-com.svg" className="icon" />
            Email
          </div>
          <div className="phone">
            <img src="./src/assets/phone-svgrepo-com.svg" className="icon" />
            +123 0000 0000
          </div>
          <div className="location">
            <img
              src="./src/assets/location-pin-svgrepo-com.svg"
              className="icon"
            />
            Location
          </div>
        </div>
      </div>
    </div>
  );
}

export default CVLayout;
