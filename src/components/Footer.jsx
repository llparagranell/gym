import "../css/Footer.css";
import { GiMoebiusTriangle } from "react-icons/gi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <>
      <div className="footer-container">
        <section>
          {" "}
          <div className="footer-1">
            <h1>
              <GiMoebiusTriangle />
            </h1>
            <p className="font-small">
              Highlight benefits of each <br />
              exercise, both physicaly and <br /> mentaly.
            </p>
          </div>
          <div className="footer-2">
            <ul>
              <h1 className="font-mid">Sitemap</h1>
              <li className="font-small">About us</li>
              <li className="font-small">Help Center</li>
              <li className="font-small">Blogs</li>
              <li className="font-small">Promos</li>
            </ul>
            <ul>
              <h1 className="font-mid">Support</h1>
              <li className="font-small">FAQ</li>
              <li className="font-small">Support Center</li>
            </ul>
            <ul>
              <h1 className="font-mid">Social Media</h1>
              <span>
                <FaInstagram/>
              </span>
              
              <span><FaFacebook /></span>
              <span>
                <FaTwitter />
              </span>
            </ul>
          </div>
        </section>
      </div>
      <div className="bottom">
        <p className="font-small">@copyright-llparagranell</p>
      </div>
    </>
  );
}

export default Footer;
