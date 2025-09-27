import Head from "next/head";
import { useRouter } from "next/router";
import defaultSEOConfig from "@/seo.config";

const safeBaseUrl = () => {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "https://kaalamithra-ai.com";
  if (typeof envUrl === "string" && envUrl.trim()) {
    return envUrl.replace(/\/$/, "");
  }
  return "https://kaalamithra-ai.com";
};

const ensureLeadingSlash = (path) => {
  if (!path) return "/";
  return path.startsWith("/") ? path : `/${path}`;
};

const isAbsoluteUrl = (value) => /^https?:\/\//i.test(value);

const buildAbsoluteUrl = (value, baseUrl) => {
  if (!value) return undefined;
  if (isAbsoluteUrl(value)) return value;
  const base =
    typeof baseUrl === "string" && baseUrl.trim()
      ? baseUrl.replace(/\/$/, "")
      : "";
  const safePath = ensureLeadingSlash(value);
  if (!base) return safePath;
  return `${base}${safePath}`;
};

const getCanonicalUrl = (pathname, baseUrl) => {
  const base =
    typeof baseUrl === "string" && baseUrl.trim()
      ? baseUrl.replace(/\/$/, "")
      : "";
  const safePath = ensureLeadingSlash(pathname.split("?")[0].split("#")[0]);
  if (!base) return safePath;
  return `${base}${safePath}`;
};

function JsonLd({ data }) {
  if (!data) return null;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      key="jsonld"
    />
  );
}

const SEO = ({
  title,
  description,
  canonical,
  image,
  type = "website",
  jsonLdType,
  jsonLdProps,
  sameAs,
  openGraph = {},
  twitter = {},
}) => {
  const router = useRouter();
  const siteUrl = safeBaseUrl();

  // Always prefer explicit canonical from props
  const rawPath = canonical || router.asPath || "/";
  const absCanonical = getCanonicalUrl(rawPath, siteUrl);

  const absImage = image ? buildAbsoluteUrl(image, siteUrl) : undefined;

  // JSON-LD handling
  let jsonLd = null;

  if (jsonLdType === "Organization") {
    jsonLd = {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: title,
      url: siteUrl || "/",
      logo: absImage,
      sameAs: sameAs || [],
    };
  }

  if (jsonLdType === "BlogPosting" && jsonLdProps) {
    jsonLd = {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: jsonLdProps.title,
      description: jsonLdProps.description,
      author: {
        "@type": "Person",
        name: jsonLdProps.author,
      },
      datePublished: jsonLdProps.datePublished,
      image: buildAbsoluteUrl(jsonLdProps.image, siteUrl),
      url: buildAbsoluteUrl(jsonLdProps.url, siteUrl),
    };
  }

  if (jsonLdType === "BreadcrumbList" && jsonLdProps) {
    jsonLd = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: jsonLdProps.items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: item.name,
        item: buildAbsoluteUrl(item.url, siteUrl),
      })),
    };
  }

  const resolvedOg = {
    ...defaultSEOConfig.openGraph,
    ...openGraph,
  };

  const preferredImage = image || resolvedOg?.images?.[0]?.url;
  const ogImageUrl = buildAbsoluteUrl(
    preferredImage || "/images/og-default.png",
    siteUrl
  );

  const twitterConfig = {
    cardType: "summary_large_image",
    ...defaultSEOConfig.twitter,
    ...twitter,
  };

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={absCanonical} />

      {absImage && <meta property="og:image" content={absImage} />}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* ✅ Removed og:url to avoid duplicate with canonical */}
      <meta property="og:image" content={ogImageUrl} />
      {resolvedOg.type && <meta property="og:type" content={resolvedOg.type} />}
      {resolvedOg.siteName && (
        <meta property="og:site_name" content={resolvedOg.siteName} />
      )}

      <meta name="twitter:card" content={twitterConfig.cardType} />
      {twitterConfig.handle && (
        <meta name="twitter:creator" content={twitterConfig.handle} />
      )}
      {twitterConfig.site && (
        <meta name="twitter:site" content={twitterConfig.site} />
      )}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />
      {jsonLd && <JsonLd data={jsonLd} />}
    </Head>
  );
};

export default SEO;
