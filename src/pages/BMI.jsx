import { useState } from "react";
import "../css/BMI.css";
import { FaMale } from "react-icons/fa";
import { FaFemale } from "react-icons/fa";

function BMI() {
  const [ yes , setyes ] = useState(false);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);

  let bmi = 0;

  const handler = () => {

  }
  const BMI = () => {
    setyes(true);
    bmi = weight/(height*height);
    alert(bmi.toFixed(2))
  }
  return (
    <>
      <div className="bmi-container">
        <div className="bmi-head">
          <h1 className="font-large">
            <p className="bmi">BMI</p> calculator
          </h1>{" "}
          <p className="font-mid">Choose Your Gender.</p>
        </div>
        <div className="bmi-gender">
          <div className="bmi-card" onClick={() => handler("male")}>
            <li>
              <FaMale />
            </li>
            <p className="font-mid">Male</p>
          </div>
          <div className="bmi-card" onClick={() => handler("female")}>
            <li>
              <FaFemale />
            </li>
            <p className="font-mid">Female</p>
          </div>
        </div>
        <div className="bmi-mid">
          <p className="font-mid">Choose Your Weight and Height.</p>

          <div>
            <label className="font-small">Height</label>
            <input type="text" placeholder="Enter Height in meter" onChange={(e)=> setHeight(e.target.value)}/>
          </div>
          <div>
            <label className="font-small">Weight</label>
            <input type="text" placeholder="Enter Weight in KiloGram" onChange={(e)=> setWeight(e.target.value)}/>
          </div>
          <div className="bmi-btn">
            <button className="bmi-btn" onClick={BMI}>Calculate BMI</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BMI;
