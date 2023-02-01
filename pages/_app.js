import "../styles/globals.css";
// require("dotenv").config();
import { IcyProvider } from "@quicknode/icy-nft-hooks";

export default function App({ Component, pageProps }) {
  return (
    // <IcyProvider apiKey={process.env.NFT_API_KEY}>
    <IcyProvider apiKey={"c2efe28d35b34b79a544e51c16b303c1"}>
      <Component {...pageProps} />
    </IcyProvider>
  );
}
