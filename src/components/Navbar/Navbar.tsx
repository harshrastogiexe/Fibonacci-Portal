import NavbarMobile from "./View/small";
import useTheme from "../../hooks/useTheme";

import "./style.scss";

const Navbar = () => {
  const [theme, setTheme] = useTheme();

  return (
    <nav className={`navbar ${theme === "LIGHT" ? "" : "navbar-dark"}`}>
      <NavbarMobile theme={theme} setTheme={setTheme} />
    </nav>
  );
};

export default Navbar;
