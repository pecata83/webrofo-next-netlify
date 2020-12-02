// import { useState } from "react";
import styles from "./Layout.module.css";
import classNames from "classnames";

type Props = {
  children?: React.ReactNode;
  className?: {};
};

const Container: React.FC<Props> = ({ className = {}, children }) => (
  <section className={classNames(styles.container, className)}>
    {children}
  </section>
);

export default Container;
