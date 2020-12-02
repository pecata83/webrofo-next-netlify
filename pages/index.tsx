import Layout, { Container, Col } from "@components/Layout";
import styles from "./index.module.css";
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
            <h1 className={styles.heading}>
              DON’T MAKE <br /> ME WAIT
            </h1>
          </div>
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
