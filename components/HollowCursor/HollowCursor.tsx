import { useState } from "react";
import Cursor from "react-cursor-follow";
import styles from "./HollowCursor.module.css";

type Props = {};

const Header: React.FC<Props> = ({}) => {
  return (
    <Cursor
      hollow
      color={"#000"}
      duration={0.666}
      size={35}
      easing={"cubic-bezier(.25,.25,.42,1)"}
    />
  );
};

export default Header;
