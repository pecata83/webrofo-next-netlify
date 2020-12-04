import { useState, useRef, createRef } from "react";
import { navigationOpen, navigationClose } from "@store/navigation/actions";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Nav.module.css";
import NavButton from "./NavButton";
import NavBackground from "./NavBackground";
import { PlayState, Timeline, Tween } from "react-gsap";
import NavMenu from "./NavMenu";

type Props = {
  title?: string;
};

const Nav: React.FC<Props> = ({}) => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.navigation.isOpen);
  const [playState, setPlayState] = useState(PlayState.pause);

  const menuItems = ["Home", "About", "Services", "Contact"];

  const navMenuRef = createRef();

  const handleMenu = () => {
    if (!isOpen) {
      dispatch(navigationOpen());
      setPlayState(PlayState.play);
    } else if (isOpen) {
      dispatch(navigationClose());
      setPlayState(PlayState.reverse);
    }
  };

  return (
    <nav className={styles.nav}>
      <NavButton isOpen={isOpen} handleMenu={handleMenu} />
      {/* <Controls playState={playState}> */}
      <Timeline playState={playState} paused={true} target={<NavBackground />}>
        <Tween
          from={{ x: "-100vw" }}
          to={{ x: "0" }}
          target="divBg"
          duration={0.2}
        />
        <Tween
          from={{ x: "-100vw" }}
          to={{ x: "0" }}
          target="divBgCover"
          duration={0.3}
        />
        {/* <Tween
          from={{ y: "100vh" }}
          to={{ y: "0" }}
          target="divNavMenu"
          duration={0.3}
        /> */}
        <Timeline target={<NavMenu />}>
          <Tween
            from={{ y: "100vh", opacity: 0 }}
            to={{ y: 0, opacity: 1 }}
            duration={0}
          />
          {menuItems.map((e, i) => (
            <Tween
              from={{ x: "-100vw", opacity: 0 }}
              to={{ x: 0, opacity: 1 }}
              target={`pNavMenu_${i}`}
              ease="power4.out"
              duration={0.2}
              delay={0}
            />
          ))}
        </Timeline>
      </Timeline>
      {/* </Controls> */}
    </nav>
  );
};

export default Nav;
