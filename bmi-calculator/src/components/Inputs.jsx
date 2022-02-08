import React from "react";

export default function Inputs() {
  const [weight, setWeight] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [heightUnit, setheightUnit] = React.useState("ft");
  const [weightUnit, setweightUnit] = React.useState("lbs");

  const poundsorkilos = (e) => {
    let bmi = 0;
    e.preventDefault();
    if (heightUnit === "ft" && weightUnit === "lbs") {
      bmi = (703 * weight) / (height * height);
    } else if (heightUnit === "cm" && weightUnit === "kg") {
      bmi = weight / (height * height);
    } else if (heightUnit === "cm" && weightUnit === "lbs") {
      bmi = weight / (height * height);
    }
  };

  return (
    <div>
      <form onSubmit={poundsorkilos}>
        <div className="height">
          <input
            type="radio"
            id="ft"
            value="ft"
            checked={heightUnit === "ft"}
            onChange={(e) => setheightUnit(e.target.value)}
          ></input>
          <label>ft</label>
          <br></br>
          <input
            type="radio"
            id="cm"
            value="cm"
            checked={heightUnit === "cm"}
            onChange={(e) => setheightUnit(e.target.value)}
          ></input>
          <label>cm</label>
          <br></br>
          <p>Your Height?</p>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            required
            min="0"
          />
        </div>
        <div className="weight">
          <p>Your weight?</p>
          <input
            type="radio"
            id="lbs"
            value="lbs"
            checked={weightUnit === "lbs"}
            onChange={(e) => setweightUnit(e.target.value)}
          ></input>
          <label>lbs</label>
          <br></br>
          <input
            type="radio"
            id="kgs"
            value="kgs"
            checked={weightUnit === "kgs"}
            onChange={(e) => setweightUnit(e.target.value)}
          ></input>
          <label>kgs</label>
          <br></br>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            required
            min="0"
          />
        </div>
        <br></br>
        <button type="submit">Go!</button>
      </form>
    </div>
  );
}
