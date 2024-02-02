import "../css/Program.css";
import { FaArrowLeft, FaArrowRight, FaWeight } from "react-icons/fa";
import { FaBowlFood } from "react-icons/fa6";
import { GiMuscleUp } from "react-icons/gi";
import { FaRunning } from "react-icons/fa";
import { GiJumpingRope } from "react-icons/gi";

function Program() {
  function scrollFunction1() {
    let e = document.getElementById("el1");
    e.scrollIntoView({
      behavior: 'smooth',
    });
  }
  const scrollFunction2 = () =>{
    let e = document.getElementById("el2");
    e.scrollIntoView({
      behavior: 'smooth',
    })}
  return (
    <>
      <div className="program-container">
        <div className="program-text">
          <h1>Program</h1>
        </div>
        <div className="programs">
          <h1 className="font-large">Explore Our Program</h1>
          <div className="program-btn">
            <li onClick={scrollFunction1}>
              <FaArrowLeft />
            </li>
            <li onClick={scrollFunction2}>
              <FaArrowRight />
            </li>
          </div>
        </div>
      </div>

      <div className="cards">
        <div className="card" id="el1">
          <li>
            <FaRunning />
          </li>
          <h1 className="font-mid">Cardio Strength</h1>
          <p className="font-small">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            molestias cupiditate
          </p>
        </div>
        <div className="card">
          <li>
            <FaWeight />
          </li>
          <h1 className="font-mid">Fat Lose</h1>
          <p className="font-small">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            molestias cupiditate
          </p>
        </div>
        <div className="card">
          <li>
            <FaBowlFood />
          </li>
          <h1 className="font-mid">Nutritions</h1>
          <p className="font-small">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            molestias cupiditate
          </p>
        </div>
        <div className="card">
          <li>
            <GiMuscleUp />
          </li>
          <h1 className="font-mid">Muscle Gain</h1>
          <p className="font-small">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            molestias cupiditate
          </p>
        </div>
        <div className="card" id="el2">
          <li>
            <GiJumpingRope />
          </li>
          <h1 className="font-mid">Zumba</h1>
          <p className="font-small">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At
            molestias cupiditate
          </p>
        </div>
      </div>
    </>
  );
}

export default Program;
