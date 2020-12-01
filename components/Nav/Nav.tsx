import Link from "next/link";
import styles from "./Nav.module.css";

type Props = {
  title: string;
};

const Header: React.FC<Props> = ({ title }) => (
  <header className={styles.nav}>
    <p>X</p>
    {/* <h1 className={styles.logo}>
      <Link href="/">
        <a>{title}</a>
      </Link>
    </h1> */}
  </header>
);

export default Header;
