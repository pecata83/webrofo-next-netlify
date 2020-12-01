import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import HamburgerMenu from "react-hamburger-menu";
import classNames from "classnames";

type Props = {
  title?: string;
};

const Header: React.FC<Props> = ({}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <HamburgerMenu
        className={classNames(
          styles.hamburger_menu,
          isOpen && styles.hamburger_menu_open
        )}
        isOpen={isOpen}
        menuClicked={(e) => setIsOpen(!isOpen)}
        width={18}
        height={18}
        strokeWidth={3}
        rotate={0}
        color="black"
        borderRadius={15}
        animationDuration={0.5}
      />
      <h1 className={styles.logo}>
        <Link href="/">
          <a>ROFO</a>
        </Link>
      </h1>
    </header>
  );
};

export default Header;
