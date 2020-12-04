import { useState } from "react";
import Cursor from "react-cursor-follow";
import styles from "./HollowCursor.module.css";

type Props = {};

const HollowCursor: React.FC<Props> = ({}) => {
  return (
    <Cursor
      hollow
      color={"#000"}
      duration={0.333}
      size={35}
      // custom={true}
      className={styles.main}
      style={{ zIndex: 10001 }}
      easing={"cubic-bezier(.25,.25,.42,1)"}
    />
  );
};

export default HollowCursor;
