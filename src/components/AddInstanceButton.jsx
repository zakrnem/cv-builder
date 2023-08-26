function AddInstanceButton({
  experienceNewInstance,
  numberGroupVisible,
  isFormVisible,
}) {
  return (
    <button
      className="add-experience"
      onClick={experienceNewInstance}
      style={{ display: numberGroupVisible === 2 && !isFormVisible ? "" : "none" }}
    >
      + Experience
    </button>
  );
}

export default AddInstanceButton;
