import "../styles/globals.css";
import { IcyProvider } from "@quicknode/icy-nft-hooks";
import Layout from "components/Layout";

export default function App({ Component, pageProps }) {
  return (
    <IcyProvider apiKey={process.env.QUICKNODE_NFT_API_KEY}>
      {/* <IcyProvider apiKey={"c2efe28d35b34b79a544e51c16b303c1"}> */}
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </IcyProvider>
  );
}
