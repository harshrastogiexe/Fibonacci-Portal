import { Dispatch } from "react";
import { Theme } from "../Reducers/themeReducer";
import { setLocalStorage } from "../utils/localStorage";

interface Action<T, P> {
  type: T;
  payload: P;
}

const setTheme = (theme: Theme) => (dispatch: Dispatch<Action<"SET_THEME", Theme>>) => {
  dispatch({
    type: "SET_THEME",
    payload: theme,
  });

  setLocalStorage<Theme>("THEME", theme);
};

export default setTheme;
