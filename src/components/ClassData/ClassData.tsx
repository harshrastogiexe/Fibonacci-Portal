import { Copy } from "react-feather";
import { Subject } from "../../@types/subject";
import "./styles.scss";

const chooseColor = () => {
  const color = {
    colors: ["#f6ba00", "#fc6b58", "#57b9a9", "#faa2d2", "#8a2be2"],
    currentIndex: 0,
  };

  const getColor = () => {
    const selectedColor = color.colors[color.currentIndex % color.colors.length];
    color.currentIndex += 1;
    return selectedColor;
  };

  return getColor;
};

const randomColor = chooseColor();

const ClassData = (props: { subject: Subject }) => {
  const color = randomColor();
  const { code, name, faculty } = props.subject;
  return (
    <div className='class_data'>
      <div className='class_data__logo' style={{ backgroundColor: color }}>
        <span className='class_data__logo__text'>SE</span>
      </div>
      <div className='class_data__content'>
        <span className='class_data__subject_name'>{name}</span>
        <span className='class_data__subject_code'>{code}</span>
        <span className='class_data__copy_icon'>
          <Copy />
        </span>
      </div>
      <div className='class_data__join'>
        <a href={faculty.zoom.link}>
          <button className='class_data__join_button' style={{ backgroundColor: `${color}3d` }}>
            JOIN
          </button>
        </a>
      </div>
    </div>
  );
};

export default ClassData;
