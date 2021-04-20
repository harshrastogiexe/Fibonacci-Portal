import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Theme } from "../@types";
import { setTheme } from "../actions";

const useTheme = (): [Theme, (theme: Theme) => void] => {
  const theme = useSelector((state: { theme: Theme }) => state.theme);
  const dispatch = useDispatch();

  const updateTheme = (newTheme: Theme) => {
    dispatch(setTheme(newTheme));
  };
  // #132d46
  useEffect(() => {
    //TODO This function to be removed
    if (theme === "DARK") {
      document.body.className = "body body-dark";
      (document.querySelector("meta#theme-color") as any).content = "#132d46";
      return;
    } else {
      document.body.className = "body";
      (document.querySelector("meta#theme-color") as any).content = "";
    }
  }, [theme]);

  return [theme, updateTheme];
};

export default useTheme;
