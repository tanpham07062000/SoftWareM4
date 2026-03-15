import logo from "../../../assets/image/logo.png";
import { FaFacebookF, FaTwitter, FaInstagram, FaBars } from "react-icons/fa";
import "./Header.scss";
const Header = () => {
  return (
    <>
      <header class="header">
        <div class="header__wrap">
          <div class="header__logo">
            <a href="#">
              <img src={logo} alt="Logo" />
              <span>SoftwareM4</span>
            </a>
          </div>
          <div class="header__menu">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div class="header__social">
            <ul>
              <li>
                <a href="#" target="_blank">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="#" target="_blank">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
          <div class="header__icon-mobile">
            <FaBars />
          </div>
        </div>
      </header>
      {/* <!-- End Header --> */}
    </>
  );
};
export default Header;
