import { SubjectsAction } from "../@types/subject";

type SubjectsReducerHandler = (state: string[] | null, action: SubjectsAction) => string[] | null;

const subjectsReducer: SubjectsReducerHandler = (state = [], action) => {
  switch (action.type) {
    case "SET_SUBJECTS":
      return [...action.payload];
    default:
      return state;
  }
};

export { subjectsReducer };
