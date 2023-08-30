function AddInstanceButton({
  className,
  buttonText,
  handleNewInstance,
  numberGroupVisible,
  groupIndex,
}) {
  return (
    <button
      className={className}
      onClick={handleNewInstance}
      style={{
        display:
          numberGroupVisible === groupIndex
            ? ""
            : "none",
      }}
    >
      {buttonText}
    </button>
  );
}

export default AddInstanceButton;
