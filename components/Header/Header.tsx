import { useState } from "react";
import Link from "next/link";
import styles from "./Header.module.css";
import classNames from "classnames";
import { Container, Col } from "@components/Layout";

type Props = {
  title?: string;
};

const Header: React.FC<Props> = ({}) => {
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <Container>
        <Col size="10rem"></Col>
        <Col size="25%"></Col>
        <Col padding="0 0 0 .125rem" size="25%">
          <p>
            Web <br /> Rofo <br />
            Production
          </p>
        </Col>
        <Col padding="0 0 0 .125rem" grow>
          <div className={styles.header_nav}>
            <div className={styles.header_nav_left}>
              <p>Lang</p>
            </div>
            <div className={styles.header_nav_right}>
              <p>About</p>
              <p>Contacts</p>
            </div>
          </div>
        </Col>
        <Col size="4rem"></Col>
      </Container>
    </header>
  );
};

export default Header;
