function AddInstanceButton({
  buttonText,
  handleNewInstance,
  numberGroupVisible,
  groupIndex,
}) {
  return (
    <button
      className={"add-instance"}
      onClick={handleNewInstance}
      style={{
        display: numberGroupVisible === groupIndex ? "" : "none",
      }}
    >
      {buttonText}
    </button>
  );
}

export default AddInstanceButton;
