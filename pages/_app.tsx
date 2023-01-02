import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/bootstrap-icons.css";
import "../styles/custom.css";

import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
