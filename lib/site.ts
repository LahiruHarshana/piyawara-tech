export const siteConfig = {
  name: "Piyawara Tech",
  shortName: "Piyawara",
  title: "Piyawara Tech — Technology that moves you forward",
  description:
    "Piyawara Tech is an independent software company in Colombo, Sri Lanka. We build mobile apps, web systems, and custom software for businesses ready to grow.",
  tagline: "Technology that moves you forward.",
  locale: "en_LK",
  email: "piyawaratech@gmail.com",
  phone: "+94704931092",
  address: {
    locality: "Colombo",
    country: "Sri Lanka",
    countryCode: "LK",
  },
  keywords: [
    "Piyawara Tech",
    "software company Colombo",
    "mobile app development Sri Lanka",
    "web development Sri Lanka",
    "custom software development",
    "technology partner",
  ],
  themeColor: "#080a0c",
};

export function getSiteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL.replace(/\/$/, "");
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return "http://localhost:3000";
}
