function InstanceHeading({
  title,
  handleEditClick,
  numberGroupVisible,
  groupIndex,
  educationInstance,
}) {
  return (
    <div
      className="instance-heading"
      style={{
        display: numberGroupVisible === groupIndex ? "" : "none",
      }}
    >
      <h3>{title}</h3>
      <button onClick={() => handleEditClick(educationInstance)}>Edit</button>
    </div>
  );
}

export default InstanceHeading;
