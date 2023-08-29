function AddInstanceButton({
  handleNewExperience,
  numberGroupVisible,
  isFormVisible,
}) {
  return (
    <button
      className="add-experience"
      onClick={handleNewExperience}
      style={{
        display: numberGroupVisible === 2 && !isFormVisible ? "" : "none",
      }}
    >
      + Experience
    </button>
  );
}

export default AddInstanceButton;
