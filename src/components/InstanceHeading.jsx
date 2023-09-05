import "../styles/InstanceHeading.css";
import imgUrl1 from "../assets/edit-fill-1480-svgrepo-com.svg";

function InstanceHeading({
  title,
  handleEditClick,
  numberGroupVisible,
  groupIndex,
  instance,
}) {
  return (
    <div
      className="instance-heading"
      style={{
        display: numberGroupVisible === groupIndex ? "" : "none",
      }}
    >
      <h3>{title}</h3>

      <button onClick={() => handleEditClick(instance)}>
        <img src={imgUrl1} className="edit-logo" />
        Edit
      </button>
    </div>
  );
}

export default InstanceHeading;
