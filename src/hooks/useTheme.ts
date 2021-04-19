import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import setTheme from "../Actions/theme";
import { Theme } from "../Reducers/themeReducer";

const useTheme = (): [Theme, (theme: Theme) => void] => {
  const theme = useSelector((state: { theme: Theme }) => state.theme);
  const dispatch = useDispatch();

  const updateTheme = (newTheme: Theme) => {
    dispatch(setTheme(newTheme));
    console.trace();
  };

  useEffect(() => {
    //TODO This function to be removed
    if (theme === "DARK") {
      document.body.className = "body body-dark";
      return;
    } else {
      document.body.className = "body";
    }
  }, [theme]);

  return [theme, updateTheme];
};

export default useTheme;
