export type Capability = {
  number: string;
  title: string;
  copy: string;
  icon: string;
};

export type Step = {
  number: string;
  title: string;
  copy: string;
};

export type Project = {
  number: string;
  title: string;
  category: string;
  copy: string;
  icon: string;
};

export const homeCapabilities: Capability[] = [
  {
    number: "01",
    title: "Mobile app development",
    copy: "Reliable Android and iOS experiences designed around real customer needs and business goals.",
    icon: "⌁",
  },
  {
    number: "02",
    title: "Web systems",
    copy: "Fast, responsive websites and web applications that make your digital presence work harder.",
    icon: "◌",
  },
  {
    number: "03",
    title: "Custom software",
    copy: "Purpose-built tools and connected systems that simplify operations and create room to grow.",
    icon: "◒",
  },
];

export const processSteps: Step[] = [
  { number: "01", title: "Understand deeply", copy: "We ask better questions before we suggest answers." },
  { number: "02", title: "Make it tangible", copy: "We turn direction into prototypes you can see, use, and trust." },
  { number: "03", title: "Build for momentum", copy: "We leave you with a system that grows with the business." },
];

export const services: Capability[] = [
  {
    number: "01",
    title: "Mobile app development",
    copy: "Native and cross-platform apps for Android and iOS — from customer-facing products to internal field tools.",
    icon: "⌁",
  },
  {
    number: "02",
    title: "Web applications",
    copy: "Dashboards, portals, and SaaS platforms built for performance, security, and long-term maintainability.",
    icon: "◌",
  },
  {
    number: "03",
    title: "Company websites",
    copy: "Brand-led marketing sites and product landing pages that load fast and convert with clarity.",
    icon: "◇",
  },
  {
    number: "04",
    title: "Custom software",
    copy: "Workflow automation, integrations, and business systems tailored to how your team actually operates.",
    icon: "◒",
  },
  {
    number: "05",
    title: "UI/UX design",
    copy: "Research, wireframes, and interface design that make complex products feel simple and trustworthy.",
    icon: "◫",
  },
  {
    number: "06",
    title: "Ongoing support",
    copy: "Monitoring, improvements, and feature releases so your product keeps pace with your business.",
    icon: "◎",
  },
];

export const values: Capability[] = [
  {
    number: "01",
    title: "Clarity first",
    copy: "We communicate in plain language, set honest timelines, and keep you informed at every stage.",
    icon: "◌",
  },
  {
    number: "02",
    title: "Built to last",
    copy: "We favour clean architecture and maintainable code over shortcuts that create future debt.",
    icon: "◒",
  },
  {
    number: "03",
    title: "People-centred",
    copy: "Every product we ship is designed around real users, real workflows, and real business outcomes.",
    icon: "⌁",
  },
];

export const principles: Step[] = [
  { number: "01", title: "Listen before building", copy: "We start with your goals, constraints, and users — not a pre-packaged solution." },
  { number: "02", title: "Ship in stages", copy: "We deliver working software early, gather feedback, and improve with each iteration." },
  { number: "03", title: "Stay accountable", copy: "You get direct access to the people doing the work, with transparent progress throughout." },
];

export const projects: Project[] = [
  {
    number: "01",
    title: "Retail operations platform",
    category: "Custom software",
    copy: "A connected inventory and order system that replaced manual spreadsheets and reduced processing time across multiple locations.",
    icon: "◒",
  },
  {
    number: "02",
    title: "Customer mobile app",
    category: "Mobile",
    copy: "An Android and iOS app for a growing service business — bookings, notifications, and payments in one polished experience.",
    icon: "⌁",
  },
  {
    number: "03",
    title: "Corporate web presence",
    category: "Web",
    copy: "A fast, responsive company website with CMS integration, lead capture, and SEO foundations for a professional brand launch.",
    icon: "◌",
  },
  {
    number: "04",
    title: "Internal workflow tool",
    category: "Custom software",
    copy: "A role-based dashboard that automated approvals and reporting for a team managing high-volume daily operations.",
    icon: "◇",
  },
];

export const industries = [
  "Retail & commerce",
  "Professional services",
  "Healthcare & wellness",
  "Education & training",
  "Logistics & operations",
  "Startups & SMEs",
];

export const technologies = [
  "React & Next.js",
  "TypeScript",
  "Node.js",
  "React Native",
  "PostgreSQL",
  "REST & GraphQL APIs",
  "Cloud hosting",
  "CI/CD pipelines",
];

export const contactSteps: Step[] = [
  { number: "01", title: "Share your brief", copy: "Tell us about your idea, timeline, and what success looks like for your business." },
  { number: "02", title: "Explore the fit", copy: "We review your needs and schedule a short call to discuss scope, approach, and next steps." },
  { number: "03", title: "Receive a proposal", copy: "You get a clear plan with deliverables, timeline, and investment — no surprises." },
];
