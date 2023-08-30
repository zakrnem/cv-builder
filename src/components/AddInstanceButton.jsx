function AddInstanceButton({
  className,
  buttonText,
  handleNewInstance,
  numberGroupVisible,
  isFormVisible,
  groupIndex,
}) {
  return (
    <button
      className={className}
      onClick={handleNewInstance}
      style={{
        display: numberGroupVisible === groupIndex && !isFormVisible ? "" : "none",
      }}
    >
      {buttonText}
    </button>
  );
}

export default AddInstanceButton;
