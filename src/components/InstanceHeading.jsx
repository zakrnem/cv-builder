import "../styles/InstanceHeading.css";

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
        <img
          src="./src/assets/edit-fill-1480-svgrepo-com.svg"
          className="edit-logo"
        />
        Edit
      </button>
    </div>
  );
}

export default InstanceHeading;
