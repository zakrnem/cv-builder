function InstanceHeading({
  title,
  handleEditClick,
  numberGroupVisible,
  isFormVisible,
}) {
  return (
    <div
      className="instance-heading"
      style={{
        display: numberGroupVisible === 2 && !isFormVisible ? "" : "none",
      }}
    >
      <h3>{title}</h3>
      <button onClick={handleEditClick}>Edit</button>
    </div>
  );
}

export default InstanceHeading;
