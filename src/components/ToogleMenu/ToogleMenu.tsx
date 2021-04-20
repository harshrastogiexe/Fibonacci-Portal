import { useSpring } from "@react-spring/core";
import { ReactNode } from "react";
import { animated } from "react-spring";
import "./styles.scss";

interface MenuProps {
  children?: ReactNode[];
}

interface ItemProps {
  children: string;
  active?: boolean;
}
const ToogleMenu = (props: MenuProps) => {
  const { children } = props;
  if (!children) return null;

  return <div className='toogle_menu'>{[...children]}</div>;
};

const ToogleItem = (props: ItemProps) => {
  const styles = useSpring({
    to: async (next) => {
      await next({ opacity: 0.6, transform: "translate(0, 20px)" });
      await next({ opacity: 1, transform: "translate(0, 0)" });
    },
    from: { opacity: 0, transform: "translate(100px, 20px)" },
  });

  const { children, active } = props;
  const className = `toogle_item__text toogle_item__text${active ? "-active" : ""}`;
  return (
    <animated.div className='toogle_item' style={styles}>
      <span className={className}>{children}</span>
    </animated.div>
  );
};

export { ToogleMenu as default, ToogleItem };
