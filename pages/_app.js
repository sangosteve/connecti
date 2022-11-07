import "../styles/globals.css";
import { useState } from "react";
import { ChannelProvider } from "../contexts/ChannelContext";
import { createBrowserSupabaseClient } from "@supabase/auth-helpers-nextjs";
import { SessionContextProvider } from "@supabase/auth-helpers-react";
import Head from "next/head";
import Layout from "../components/Layout";

export default function App({ Component, pageProps }) {
  const [supabaseClient] = useState(() => createBrowserSupabaseClient());
  if (Component.getLayout) {
    return (
      <>
        <Head>
          <title>Page title</title>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <SessionContextProvider
          supabaseClient={supabaseClient}
          initialSession={pageProps.initialSession}
        >
          <ChannelProvider>
            <Layout>
              <Component {...pageProps} />
            </Layout>
          </ChannelProvider>
        </SessionContextProvider>
      </>
    );
  }

  return (
    <SessionContextProvider
      supabaseClient={supabaseClient}
      initialSession={pageProps.initialSession}
    >
      <ChannelProvider>
        <Component {...pageProps} />;
      </ChannelProvider>
    </SessionContextProvider>
  );

  // const getLayout = Component.getLayout || ((page) => page);

  // return getLayout(<Component {...pageProps} />);
}
