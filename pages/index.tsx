import Layout, { Container, Col } from "@components/Layout";
import styles from "./index.module.css";
import { Controls, PlayState, Tween } from "react-gsap";

export default function Home() {
  return (
    <Layout>
      <Container>
        <Col size="10rem"></Col>
        <Col size="25%">
          <div className={styles.heading_number_container}>
            <p className={styles.heading_number}>01</p>
          </div>
        </Col>
        <Col grow>
          <div className={styles.heading_container}>
            <Tween from={{ opacity: 0 }} duration={3}>
              <h1 className={styles.heading}>
                DON’T MAKE <br /> ME WAIT
              </h1>
            </Tween>
          </div>
        </Col>
        <Col size="4rem"></Col>
      </Container>
      <Container className={styles.heading_intro}>
        <Col size="10rem"></Col>
        <Col size="25%">
          <div className={styles.circle}></div>
          <svg
            width="100%"
            height="100%"
            viewBox="-55 -55 110 110"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <Tween
              from={{
                svgDraw: [0, 0.5],
              }}
              to={{
                svgDraw: [1, 0],
              }}
              delay={1}
            >
              <circle
                r="54"
                stroke="#ef3e16"
                strokeWidth="1"
                fill="transparent"
              />
            </Tween>
          </svg>
        </Col>
        <Col size="25%"></Col>
        <Col grow>
          <Tween
            from={{ opacity: 0, transform: "translate3d(-100px, 0, 0)" }}
            ease="back.out(1.4)"
            delay={2}
          >
            <p className={styles.heading_intro_text}>
              We create fast sites from
              <br />
              <span>which no one will escape</span>
            </p>
          </Tween>
          <Tween
            from={{
              opacity: 0,
              // rotation: "360",
            }}
            ease="back.out(0)"
            delay={3.5}
            // repeat={-1}
            duration={3}
          >
            <p className={styles.circle_text}>
              This is a circle repeating text.
            </p>
          </Tween>
        </Col>
        <Col size="4rem"></Col>
      </Container>
    </Layout>
  );
}

export function getStaticProps() {
  return {
    props: {},
  };
}
