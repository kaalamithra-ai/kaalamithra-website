// pages/_app.jsx
import "@/styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "@/lib/analytics";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/seo/seo";

export default function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;

    const handleRouteChange = (url) => {
      try {
        if (typeof gtag.pageview === "function") {
          gtag.pageview(url);
        }
      } catch {
        // silently ignore analytics errors
      }
    };

    // track initial load and subsequent route changes
    handleRouteChange(router.asPath);
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => router.events.off("routeChangeComplete", handleRouteChange);
  }, [router]);

  return (
    <>
      <SEO pathname={router.asPath} />
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </>
  );
}
