function InstanceHeading({
  title,
  handleEditClick,
  numberGroupVisible,
  isFormVisible,
  groupIndex,
}) {
  return (
    <div
      className="instance-heading"
      style={{
        display: numberGroupVisible === groupIndex && !isFormVisible ? "" : "none",
      }}
    >
      <h3>{title}</h3>
      <button onClick={handleEditClick}>Edit</button>
    </div>
  );
}

export default InstanceHeading;
