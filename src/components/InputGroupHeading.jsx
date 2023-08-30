function InputGroupHeading({ title, toggleGroup, numberGroupVisible, groupIndex }) {
  return (
    <div className="inputs-heading">
      <h2>{title}</h2>
      <button
        onClick={() => toggleGroup(groupIndex)}
        style={{
          transition: "transform 0.3s",
          transform: numberGroupVisible === {groupIndex} ? "" : "rotate(180deg)",
        }}
      >
        <img src="./src/assets/down-svgrepo-com.svg" />
      </button>
    </div>
  );
}

export default InputGroupHeading;
