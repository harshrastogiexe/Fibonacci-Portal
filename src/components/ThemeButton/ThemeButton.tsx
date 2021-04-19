import { Dispatch } from "redux";
import setTheme from "../../Actions/theme";
import { Theme } from "../../Reducers/themeReducer";
import { Sun, Moon } from "react-feather";

import "./styles.scss";

const ThemeButton = ({ theme, updateTheme }: { theme: Theme; updateTheme: Dispatch<any> }) => {
  const isDark = theme === "DARK" ? true : false;

  const handelThemeChange = () => {
    if (isDark) return updateTheme(setTheme("LIGHT"));
    return updateTheme(setTheme("DARK"));
  };

  const props: React.SVGAttributes<SVGElement> = {
    className: `theme_icon theme_icon${isDark ? "theme_icon-dark" : ""}`,
    onClick: handelThemeChange,
  };
  return <>{isDark ? <Sun {...props} /> : <Moon {...props} />}</>;
};

export default ThemeButton;
