import "../styles/globals.css";
import { IcyProvider } from "@quicknode/icy-nft-hooks";
import Layout from "components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <IcyProvider apiKey={process.env.QUICKNODE_NFT_API_KEY}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IcyProvider>
  );
}
