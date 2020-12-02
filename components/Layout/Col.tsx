// import { useState } from "react";
import styles from "./Layout.module.css";

type Props = {
  size?: string;
  padding?: string;
  grow?: boolean;
  children?: React.ReactNode;
  style?: {};
};

const Col: React.FC<Props> = ({ grow, style, size, children, padding }) => {
  let _style = {
    ...style,
    width: size,
    padding: padding,
    flex: null,
  };

  if (grow) _style.flex = 1;

  return (
    <div className={styles.column} style={_style}>
      {children}
    </div>
  );
};

export default Col;
