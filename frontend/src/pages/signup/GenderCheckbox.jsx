const GenderCheckbox = ({ OnCheckboxChange, selectGender }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer ${
            selectGender === "male" ? "selected" : ""
          }`}
        >
          <span className="label-text" style={{ color: "white" }}>
            Male
          </span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectGender === "male"}
            onChange={() => OnCheckboxChange("male")}
          />
        </label>
      </div>
      <div className="form-control">
        <label
          className={`label gap-2 cursor-pointer${
            selectGender === "female" ? "selected" : ""
          }`}
        >
          <span className="label-text" style={{ color: "white" }}>
            Female
          </span>
          <input
            type="checkbox"
            className="checkbox border-slate-900"
            checked={selectGender === "female"}
            onChange={() => OnCheckboxChange("female")}
          />
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;
