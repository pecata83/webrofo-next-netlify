import { forwardRef } from "react";
import styles from "./Nav.module.css";
import NavMenu from "./NavMenu";
import { Tween } from "react-gsap";

type Props = {
  isOpen?: boolean;
};

const NavBackground: React.FC<Props> = forwardRef(
  ({ isOpen }, targets: any) => {
    return (
      <>
        <div
          ref={(div) => targets.set("divBg", div)}
          className={styles.nav_background}
        ></div>
        <div
          ref={(div) => targets.set("divBgCover", div)}
          className={styles.nav_background_cover}
        ></div>
        {/* <div
          ref={(div) => targets.set("divNavMenu", div)}
          className={styles.nav_menu}
        >
          <NavMenu />
        </div> */}
      </>
    );
  }
);

export default NavBackground;
