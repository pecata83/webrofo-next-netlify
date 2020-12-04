import { forwardRef } from "react";
import styles from "./Nav.module.css";
import { Timeline, Tween } from "react-gsap";

type Props = {
  isOpen?: boolean;
};

const menuItems = ["Home", "About", "Services", "Contact"];

const NavMenu: React.FC<Props> = forwardRef(({ isOpen }, targets: any) => {
  return (
    <div
      // ref={(div) => targets.set("divNavMenu", div)}
      className={styles.nav_menu}
    >
      {menuItems.map((e, i) => (
        <p key={i} ref={(div) => targets.set(`pNavMenu_${i}`, div)}>
          {e}
        </p>
      ))}
    </div>
  );
});

// const NavMenu: React.FC<Props> = ({ isOpen }) => {
//   return (
//     <Timeline>
//       {menuItems.map((e, i) => (
//         <Tween key={i} from={{ x: "-100vw" }} to={{ x: "0" }} duration={0.3}>
//           <p>{e}</p>
//         </Tween>
//       ))}
//     </Timeline>
//   );
// };

export default NavMenu;
