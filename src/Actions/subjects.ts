import subjects from "../JSON/subjects.json";

const setSubjects = () => {
  const item: string[] = [];
  for (const code in subjects) item.push(code);
  return item;
};

export default setSubjects;
