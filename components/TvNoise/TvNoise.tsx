import { useState } from "react";
import Link from "next/link";
import styles from "./TvNoise.module.css";

type Props = {
  title?: string;
};

const Header: React.FC<Props> = ({}) => {
  const [menu, setMenu] = useState(false);

  return (
    <div className={styles.main_wrapper}>
      <div className={styles.noise_wrapper}>
        <div className={styles.noise}>TV Noise</div>
      </div>
    </div>
  );
};

export default Header;
