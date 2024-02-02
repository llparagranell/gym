import { useNavigate } from "react-router";
import "../css/Transform.css";

function Transform() {
  const navigate = useNavigate();
  return (
    <>
      <div className="transform-container">
        <div
          className="transform-img"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
          <img
            src="https://images.unsplash.com/photo-1577221084712-45b0445d2b00?q=80&w=1898&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
        <div
          className="transform-text"
          data-aos="fade-left"
          data-aos-duration="2000"
        >
          <h1 className="font-large">
            Transform your <br /> physique with our <br /> fitness plan.
          </h1>
          <li className="font-small">Increse Muscle and Strength.</li>
          <li className="font-small">Be Healthier than before.</li>
          <li className="font-small">Increse Stamina</li>
          <div className="transform-btn">
            <button  onClick={()=> navigate('/join')}>Join now</button>
            <button>Contact us</button>
          </div>
        </div>
      </div>
      <div className="join-us" data-aos="fade-up"  data-aos-duration="2000">
        <h1 className="font-mid">
          Enhance user experience with healthy nutrition tips, <br />
          support resources, and social elements.
        </h1>
        <button onClick={()=> navigate('/join')}>Join us</button>
      </div>
    </>
  );
}

export default Transform;
