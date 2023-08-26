function InputGroupHeading({ title, toggleGroup, numberGroupVisible }) {
  return (
    <div className="inputs-heading">
      <h2>{title}</h2>
      <button
        onClick={() => toggleGroup(2)}
        style={{
          transition: "transform 0.3s",
          transform: numberGroupVisible !== 2 ? "" : "rotate(180deg)",
        }}
      >
        <img src="./src/assets/down-svgrepo-com.svg" />
      </button>
    </div>
  );
}

export default InputGroupHeading;
