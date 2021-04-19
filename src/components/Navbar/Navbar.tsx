import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.png";
import "./style.scss";
import { Search, Menu } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Theme } from "../../Reducers/themeReducer";
import ThemeButton from "../ThemeButton/ThemeButton";

const Navbar = () => {
  const theme = useSelector((state: { theme: Theme }) => state.theme);
  const dispatch = useDispatch();
  return (
    <nav className={`navbar ${theme === "LIGHT" ? "" : "navbar-dark"}`}>
      <div className='navbar__grid fluid'>
        <div className='navbar__item'>
          <Link to='/'>
            <img className='navbar__logo' src={logo} alt='Fibonacci Logo' />
          </Link>
        </div>
        <div className='navbar__item navbar__title'>Home</div>
        <div className='navbar__item-icons'>
          <ThemeButton theme={theme} updateTheme={dispatch} />
          <Search className='navbar__icon' />
          <Menu className='navbar__icon' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
