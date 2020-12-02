// import { useState } from "react";
import styles from "./Layout.module.css";

type Props = {
  children?: React.ReactNode;
};

const Container: React.FC<Props> = ({ children }) => (
  <section className={styles.container}>{children}</section>
);

export default Container;
