import { Link } from "react-router-dom";
import { Search, Menu } from "react-feather";

import logo from "../../../assets/icons/logo.png";

import Item from "../Item";
import ThemeButton from "../../ThemeButton/ThemeButton";
import { Theme } from "../../../@types";
import Sidebar from "../../Sidebar/Sidebar";
import { useState } from "react";
import { animated, useTransition } from "react-spring";

interface Props {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
}

type NavMobileFC = (props: Props) => JSX.Element;

const NavbarMobile: NavMobileFC = ({ theme, setTheme }: Props) => {
  const [open, setOpen] = useState(false);

  const transitions = useTransition(open, {
    from: { transform: "translateX(-100%)", opacity: 0 },
    enter: { transform: "translateX(-30%)", opacity: 1 },
    leave: { transform: "translateX(100%)", opacity: 0.4 },
    reverse: open,
  });

  const newTheme: Theme = theme === "DARK" ? "LIGHT" : "DARK";
  return (
    <div>
      {transitions((styles, item) => item && <Sidebar styles={styles} />)}
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
          <Menu className='navbar__icon' onClick={() => setOpen(!open)} />
        </Item>
      </div>
    </div>
  );
};

export default NavbarMobile;
