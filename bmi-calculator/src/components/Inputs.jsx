import React from "react";

export default function Inputs(props) {
  const [weight, setWeight] = React.useState("");
  const [height, setHeight] = React.useState("");
  const [heightUnit, setheightUnit] = React.useState("ft");
  const [weightUnit, setweightUnit] = React.useState("lbs");
  const [final, setFinal] = React.useState(null);

  let bmi = 0;
  const poundsorkilos = (e) => {
    e.preventDefault();
    if (heightUnit === "ft" && weightUnit === "lbs") {
      bmi = (703 * weight) / (height * 12 * (height * 12));
    } else if (heightUnit === "cm" && weightUnit === "kgs") {
      bmi = weight / ((height / 100) * (height / 100));
    } else if (heightUnit === "cm" && weightUnit === "lbs") {
      bmi = (703 * weight) / ((height / 30.48) * 12 * ((height / 30.48) * 12));
    } else if (heightUnit === "ft" && weightUnit === "kgs") {
      bmi = weight / ((height / 3.281) * (height / 3.281));
    }

    setFinal(bmi.toFixed(2));
  };
  //console.log(props.data);
  function onlyNumberKey(e) {
    // Only ASCII character in that range allowed
    const re = /^\d*\.?\d*$/;
    if (e === "" || re.test(e)) {
      setHeight(e);
    }
  }

  function onlyNumberKey2(e) {
    // Only ASCII character in that range allowed
    const re = /^\d*\.?\d*$/;
    if (e === "" || re.test(e)) {
      setWeight(e);
    }
  }

  return (
    <div>
      <form onSubmit={poundsorkilos}>
        <div className="height">
          <p>Your Height?</p>
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
          <br></br>
          <input
            type="text"
            value={height}
            onChange={(e) => onlyNumberKey(e.target.value)}
            required
            //onKeyPress={(e) => onlyNumberKey(e.target.value)}
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
          <br></br>
          <input
            type="text"
            value={weight}
            onChange={(e) => onlyNumberKey2(e.target.value)}
            required
          />
        </div>
        <br></br>
        <button type="submit">Go!</button>
      </form>
      {final && (
        <p>
          <strong>Hello your BMI is {final}</strong>
        </p>
      )}
    </div>
  );
}
