import Head from "next/head";
import Nav from "@components/Nav";
import Header from "@components/Header";
import Footer from "@components/Footer";
import TvNoise from "@components/TvNoise";
import HollowCursor from "@components/HollowCursor";

type Props = {
  title?: string;
  children?: React.ReactNode;
};

const IndexPage: React.FC<Props> = ({ title = "wEb rOFo", children }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <HollowCursor />
    <TvNoise />
    <Nav />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default IndexPage;
