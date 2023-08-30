function AddInstanceButton({
  className,
  buttonText,
  handleNewInstance,
  numberGroupVisible,
  isFormVisible,
}) {
  return (
    <button
      className={className}
      onClick={handleNewInstance}
      style={{
        display: numberGroupVisible === 2 && !isFormVisible ? "" : "none",
      }}
    >
      {buttonText}
    </button>
  );
}

export default AddInstanceButton;
