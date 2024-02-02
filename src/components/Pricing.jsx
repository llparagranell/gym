import { useNavigate } from "react-router";
import "../css/Pricing.css";

function Pricing() {
  const navigate = useNavigate();
  return (
    <>
      <div className="pricing-container" id="plans">
        <p className="font-mid">Pricing</p>
        <h1 className="font-large">Our Pricing Packages</h1>
        <div className="pricing">
          <div className="pricing-card"data-aos="flip-up" data-aos-duration="5000">
            <p className="font-small">Basic Package</p>
            <h1 className="font-large">₹ 500</h1>
            <li>Unlimited Gym Access</li>
            <li>2x Fitness Consultant</li>
            <li>Nutrition Tracking</li>
            <li>1X Free Suplement</li>
            <li>3 Days per week</li>
            <li>Personal Trainer</li>
            <button className="pricing-btn"  onClick={()=> navigate('/join')}>Join us</button>
          </div>
          <div className="pricing-card" data-aos="flip-up" data-aos-duration="5000">
          <p className="font-small">Mid Package</p>
            <h1 className="font-large">₹ 1000</h1>
            <li>Unlimited Gym Access</li>
            <li>4x Fitness Consultant</li>
            <li>Nutrition Tracking</li>
            <li>3X Free Suplement</li>
            <li>5 Days per week</li>
            <li>Personal Trainer</li>
            <button className="pricing-btn" onClick={()=> navigate('/join')}>Join us</button>
          </div>
          <div className="pricing-card"data-aos="flip-up" data-aos-duration="5000">
          <p className="font-small">Pro Package</p>
            <h1 className="font-large">₹ 1500</h1>
            <li>Unlimited Gym Access</li>
            <li>7x Fitness Consultant</li>
            <li>Nutrition Tracking</li>
            <li>5X Free Suplement</li>
            <li>Gym Card</li>
            <li>Personal Trainer</li>
            <button className="pricing-btn" onClick={()=> navigate('/join')}>Join us</button>
          </div>
          <div className="pricing-card"data-aos="flip-up" data-aos-duration="5000">
          <p className="font-small">Athlete Package</p>
            <h1 className="font-large">₹ 2000</h1>
            <li>Unlimited Gym Access</li>
            <li>Free Fitness Consultant</li>
            <li>Nutrition Tracking</li>
            <li>Free Suplement</li>
            <li>Free Clothes</li>
            <li>All Training Program</li>
            <button className="pricing-btn" onClick={()=> navigate('/join')}>Join us</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
