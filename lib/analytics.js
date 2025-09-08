export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID;

// Log pageviews
export const pageview = (url) => {
  if (!GA_TRACKING_ID) return;
  window.gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// Log specific events
export const event = ({ action, category, label, value }) => {
  if (!GA_TRACKING_ID) return;
  window.gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
