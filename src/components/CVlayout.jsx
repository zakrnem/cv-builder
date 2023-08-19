import "../styles/CVLayout.css";
import CVdetails from "./CVdetails";

function CVlayout({ name, email, phone, location }) {
  return (
    <div className="cv-container">
      <CVdetails
      name={name}
      email={email}
      phone={phone}
      location={location} />

      <div className="cv-experience">

      </div>

      <div className="cv-education">

      </div>
    </div>
  );
}

export default CVlayout;
