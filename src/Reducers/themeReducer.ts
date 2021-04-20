import { Theme, ThemeAction } from "../@types";
import { getLocalStorage } from "../utils/localStorage";

const savedTheme = getLocalStorage<Theme>("THEME");

const initialValue = savedTheme ? savedTheme : "LIGHT";

type ThemeReducer = (theme: Theme, action: ThemeAction) => Theme;

const themeReducer: ThemeReducer = (state = initialValue, action: ThemeAction): Theme => {
  switch (action.type) {
    case "SET_THEME":
      return action.payload;
    default:
      return state;
  }
};

export { themeReducer };
