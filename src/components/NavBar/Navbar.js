import { MicrophoneSvg, SettingSvg } from '../../assets/images';
import './Navbar.css';

const Navbar = () => (

  <nav className="navbar__container">
    <h1 className="navbar__title">Sneakers Store</h1>
    <ul className="navbar__container-links">
      <li className="navbar-container__svg">
        <MicrophoneSvg />
      </li>
      <li className="navbar-container__svg">
        <SettingSvg />
      </li>
    </ul>
  </nav>
);

export default Navbar;
