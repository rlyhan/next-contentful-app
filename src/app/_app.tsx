import { ApolloProvider } from "@apollo/client";
import apolloClient from "../content-service/apolloClient"; // Adjust the path based on your project structure
import Layout from "./layout";
import "../styles/globals.css";

import type { AppProps } from "next/app";

function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  );
}

export default App;
