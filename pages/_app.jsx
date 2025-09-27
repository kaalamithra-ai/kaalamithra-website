import "@/styles/globals.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "@/lib/analytics";
import PageLayout from "@/components/layout/PageLayout";
import SEO from "@/components/seo/seo";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <SEO pathname={router.asPath} />
      <PageLayout>
        <div className="pt-20">
          <Component {...pageProps} />
        </div>
      </PageLayout>
    </>
  );
}

export default MyApp;
