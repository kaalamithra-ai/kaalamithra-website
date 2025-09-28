const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

let warned = false;

export function initAnalytics() {
  if (!GA_ID) {
    if (process.env.NODE_ENV === "development" && !warned) {
      console.warn(
        "[analytics] NEXT_PUBLIC_GA_ID is not set. Analytics will not be initialized."
      );
      warned = true;
    }
    return;
  }
  // ...initialize analytics with GA_ID...
}

// Log pageviews
export const pageview = (url) => {
  if (!GA_ID) return;
  window.gtag("config", GA_ID, {
    page_path: url,
  });
};

// Log specific events
export const event = ({ action, category, label, value }) => {
  if (!GA_ID) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
