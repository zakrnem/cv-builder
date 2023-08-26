function InstanceHeading({ title, handleEditClick }) {
  return (
    <div className="instance-heading">
      <h3>{title}</h3>
      <button onClick={handleEditClick}>Edit</button>
    </div>
  );
}

export default InstanceHeading;
