import Pricing from '../components/Pricing';
import Program from '../components/Program';
import Subscribe from '../components/Subscribe';
import Transform from '../components/Transform';
import '../css/Home.css'
import { MdOutlineVideoLibrary } from "react-icons/md";


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Home() {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);

    return ( <>
    <div className="home-component"  data-aos="fade-up" data-aos-duration="3000" >
        <div className='bg'>   <div></div>     </div>

        <h1 className="font-large">
            Helps for your <br /> ideal body fitness
        </h1>
        <p className="font-small">Motivate users with benefits and positive reinforcement,<br />and after modifications and progress tracking.</p>
        <div className="home-btn">
        <button>Start Training</button>
        <button>Start demo <MdOutlineVideoLibrary/></button>
        </div>
    </div>
    <Program/>
    <Transform/>
    <Pricing/>
    <Subscribe/>
    </> );
}

export default Home;