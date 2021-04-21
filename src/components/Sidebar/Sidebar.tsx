import { useSpring } from "@react-spring/core";
import { useEffect } from "react";
import { animated } from "react-spring";
import "./styles.scss";

const Sidebar = (props: any) => {
  // const [styles, animate] = useSpring(() => ({
  //   from: {
  //     transform: "translateX(-100%)",
  //   },
  //   to: {
  //     transform: "translateX(-50%)",
  //   },
  // }));

  // useEffect(() => {
  //   return () => {
  //     console.log("Rand");
  //     animate.start({
  //       from: {
  //         transform: "translateX(-50%)",
  //       },
  //       to: {
  //         transform: "translateX(-100%)",
  //       },
  //     });
  //   };
  // }, [animate]);

  return <animated.div style={props.styles} className='sidebar'></animated.div>;
};

export default Sidebar;
// {
// 	from: {
// 		transform: "translateX(-100%)",
// 	},
// 	to: {
// 		transform: "translateX(-50%)",
// 	},
// }
