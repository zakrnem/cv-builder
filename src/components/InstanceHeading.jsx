function InstanceHeading({ title, handleEditClick, numberGroupVisible }) {
  return (
    <div
      className="instance-heading"
      style={{ display: numberGroupVisible === 2 ? "" : "none" }}
    >
      <h3>{title}</h3>
      <button onClick={handleEditClick}>Edit</button>
    </div>
  );
}

export default InstanceHeading;
