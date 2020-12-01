import Link from "next/link";
import styles from "./Footer.module.css";
import { FiFacebook } from "@react-icons/all-files/fi/FiFacebook";
import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram";
import { FiLinkedin } from "@react-icons/all-files/fi/FiLinkedin";

type Props = {
  title?: string;
};

const Footer: React.FC<Props> = ({ title }) => (
  <footer className={styles.footer}>
    <div className={styles.footer_container}>
      <ul className={styles.footer_icons}>
        <li>
          <FiLinkedin />
        </li>
        <li>
          <FiFacebook />
        </li>
        <li>
          <FiInstagram />
        </li>
      </ul>
      <p>Copyright 2020</p>
    </div>
  </footer>
);

export default Footer;
