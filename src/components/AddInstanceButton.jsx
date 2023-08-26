function AddInstanceButton({ experienceNewInstance, numberGroupVisible }) {
  return (
    <button
      className="add-experience"
      onClick={experienceNewInstance}
      style={{ display: numberGroupVisible === 2 ? "" : "none" }}
    >
      + Experience
    </button>
  );
}

export default AddInstanceButton;
