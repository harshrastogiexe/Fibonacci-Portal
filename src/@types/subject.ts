export interface Faculty {
  code: string | null;
  zoom: {
    id: string | null;
    passcode: string | null;
    link: string;
  };
}

export interface Subject {
  code: "string";
  name: string;
  faculty: Faculty;
}

export interface SubjectsAction {
  type: "SET_SUBJECTS";
  payload: string[];
}
