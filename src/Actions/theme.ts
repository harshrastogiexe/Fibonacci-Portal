import { Dispatch } from "redux";
import { Theme, ThemeAction } from "../@types";
import { setLocalStorage } from "../utils/localStorage";

type SetThemeHander = (theme: Theme) => (dispatch: Dispatch<ThemeAction>) => void;

const setTheme: SetThemeHander = (theme) => (dispatch) => {
  dispatch({
    type: "SET_THEME",
    payload: theme,
  });

  setLocalStorage<Theme>("THEME", theme);
};

export { setTheme };
