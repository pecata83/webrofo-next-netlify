import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import TvNoise from "@components/TvNoise";
import HollowCursor from "@components/HollowCursor";

type Props = {
  title?: string;
  children?: React.ReactNode;
};

const IndexPage: React.FC<Props> = ({ title = "wEB rOFO", children }) => (
  <>
    <Head>
      <title>{title}</title>
    </Head>
    <HollowCursor />
    <TvNoise />
    <Header />
    <main>{children}</main>
    <Footer />
  </>
);

export default IndexPage;
