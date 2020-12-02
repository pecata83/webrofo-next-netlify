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
      <Columns />
    </div>
  );
};

const columnsSizes = ["4rem", "2rem", "2rem", "2rem", "25%", "25%", "25%"];

export const Columns = ({}) => {
  return (
    <div className={styles.columns}>
      {columnsSizes.map((size, i) => (
        <div
          key={i}
          className={styles.column}
          style={{
            width: size,
          }}
        ></div>
      ))}
      <div className={styles.last_column}></div>
    </div>
  );
};

export default Header;
