function AddInstanceButton({experienceNewInstance}) {
  return (
    <button className="add-experience" onClick={experienceNewInstance}>
      + Experience
    </button>
  );
}

export default AddInstanceButton