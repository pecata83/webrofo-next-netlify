import Link from "next/link";
import styles from "./Footer.module.css";

type Props = {
  title?: string;
};

const Footer: React.FC<Props> = ({ title }) => (
  <footer className={styles.footer}>
    <div className={styles.footer_container}>
      <p>Copyright 2020</p>
    </div>
  </footer>
);

export default Footer;
