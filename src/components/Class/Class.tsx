import ClassData from "../ClassData/ClassData";
import ToogleMenu, { ToogleItem } from "../ToogleMenu/ToogleMenu";
import subjects from "../../JSON/subjects.json";
import "./style.scss";
import { SubjectsAction } from "../../@types/subject";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

const Class = () => {
  const [codes, setCodes] = useState<string[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    const item: string[] = [];
    for (const code in subjects) item.push(code);

    dispatch<SubjectsAction>({
      type: "SET_SUBJECTS",
      payload: item,
    });

    setCodes(item);
    console.log(item);
  }, [dispatch]);

  return (
    <div className='class'>
      <ToogleMenu>
        <ToogleItem active>Today's Classes</ToogleItem>
        <ToogleItem>All Classes</ToogleItem>
      </ToogleMenu>
      <div className='class__wrapper'>
        {codes.map((code) => (
          <ClassData subject={(subjects as any)[code]} />
        ))}
      </div>
    </div>
  );
};

export default Class;
