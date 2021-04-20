import { animated, useSpring } from "react-spring";
import "./style.scss";

interface Props {
  firstName: string;
}

const GreetUser = ({ firstName }: Props) => {
  const props = useSpring({
    from: { opacity: 0, transform: "scale(0.7)" },
    to: {
      opacity: 1,
      transform: "scale(1)",
    },
    delay: 200,
  });

  return (
    <animated.div className='greet_user' style={{ ...props, color: "#696969" }}>
      welcome back {firstName}, ready for your next lesson?🔥
    </animated.div>
  );
};

export default GreetUser;
