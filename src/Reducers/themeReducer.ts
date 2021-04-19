import { getLocalStorage } from "../utils/localStorage";

export type Theme = "DARK" | "LIGHT";

interface ThemeAction {
  type: "SET_THEME";
  payload: Theme;
}

const item = getLocalStorage<Theme>("THEME");

const initialValue: Theme = item ? item : "LIGHT";

const themeReducer = (state = initialValue, action: ThemeAction): Theme => {
  switch (action.type) {
    case "SET_THEME":
      return action.payload;
    default:
      return state;
  }
};

export { themeReducer };
