import { Link } from "react-router-dom";
import { Search, Menu } from "react-feather";

import logo from "../../../assets/icons/logo.png";

import Item from "../Item";
import ThemeButton from "../../ThemeButton/ThemeButton";
import { Theme } from "../../../@types";

interface Props {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
}

type NavMobileFC = (props: Props) => JSX.Element;

const NavbarMobile: NavMobileFC = ({ theme, setTheme }: Props) => {
  const newTheme: Theme = theme === "DARK" ? "LIGHT" : "DARK";
  return (
    <div>
      <div className='navbar__grid fluid'>
        <Item>
          <Link to='/'>
            <img className='navbar__logo' src={logo} alt='Fibonacci Logo' />
          </Link>
        </Item>
        <Item>Home</Item>
        <Item>
          <ThemeButton theme={theme} updateTheme={() => setTheme(newTheme) as any} />
          <Search className='navbar__icon' />
          <Menu className='navbar__icon' />
        </Item>
      </div>
    </div>
  );
};

export default NavbarMobile;
