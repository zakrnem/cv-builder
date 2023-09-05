import "../styles/CVdetails.css";
import imgUrl1 from "../assets/mail-svgrepo-com.svg"
import imgUrl2 from "../assets/phone-svgrepo-com.svg"
import imgUrl3 from "../assets/location-pin-svgrepo-com.svg"

function CVdetails({ detailsInput }) {
  return (
    <div className="cv-personal-details">
      <h2>{detailsInput.name}</h2>
      <div className="cv-details">
        <div className="email">
          <img src={imgUrl1} className="icon" />
          {detailsInput.email}
        </div>
        <div className="phone">
          <img src={imgUrl2} className="icon" />
          {detailsInput.phone}
        </div>
        <div className="location">
          <img
            src={imgUrl3}
            className="icon"
          />
          {detailsInput.location}
        </div>
      </div>
    </div>
  );
}

export default CVdetails;
