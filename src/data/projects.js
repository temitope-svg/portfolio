const GITHUB_USER = "https://github.com/temitope-svg";

export const PROJECTS = [
  {
    id: "aztralli",
    title: "Aztralli",
    description:
      "Multi-sided commerce platform connecting wholesalers, retailers, consumers, and dispatchers across web and mobile.",
    tags: ["React", "TypeScript", "React Native"],
    image: "/projects/aztralli.jpg",
    liveUrl: "https://aztralli.com/",
    gallery: {
      web: [
        {
          src: "/projects/aztralli/web-1.jpg",
          label: "My Wallet",
          alt: "Aztralli wallet dashboard on web",
        },
        {
          src: "/projects/aztralli/web-2.jpg",
          label: "Storefront",
          alt: "Aztralli product storefront on web",
        },
        {
          src: "/projects/aztralli/web-3.jpg",
          label: "Marketing home",
          alt: "Aztralli marketing homepage on web",
        },
      ],
      mobile: [
        {
          src: "/projects/aztralli/mobile-1.jpg",
          label: "Home",
          alt: "Aztralli mobile home screen",
        },
        {
          src: "/projects/aztralli/mobile-2.jpg",
          label: "Overview",
          alt: "Aztralli mobile dispatcher overview",
        },
        {
          src: "/projects/aztralli/mobile-3.jpg",
          label: "Wholesale Market",
          alt: "Aztralli mobile wholesale market",
        },
      ],
    },
    role: "Frontend & Mobile Developer",
    year: "2026",
    type: "Marketplace",
    overview: [
      "Aztralli is a commerce marketplace for Nigeria that brings wholesalers, retailers, consumers, and dispatchers into one product — browse stores, request goods, checkout, and fulfill orders end to end.",
      "I contributed across the React + TypeScript web app and the React Native mobile client, building flows for catalog, orders, auth, payments, and real-time updates against a shared backend.",
    ],
    features: [
      "Role-based experiences for wholesaler, retailer, consumer, and dispatcher",
      "Product catalog, seller stores, and customer product requests",
      "Cart, checkout, order tracking, returns, and cancellations",
      "Flutterwave payment integration and wallet-related flows",
      "Auth with phone/email OTP, Google, and Apple sign-in on mobile",
      "Real-time messaging and updates via SignalR",
    ],
    outcome:
      "A production marketplace spanning web and mobile — focused on practical B2B and B2C commerce flows rather than a thin storefront demo.",
  },
  {
    id: "jollof-bowl",
    title: "Jollof Bowl",
    description:
      "Brand and ordering site for a West African fast-casual restaurant — menu, catering, and online orders.",
    tags: ["Frontend", "UI/UX", "Responsive"],
    image: "/projects/jollof-bowl.jpg",
    liveUrl: "https://thejollofbowl.com/",
    gallery: {
      web: [
        {
          src: "/projects/jollof-bowl/web-1.jpg",
          label: "Special Bowls",
          alt: "Jollof Bowl menu with Suya, Vegan, and Yassa bowls",
        },
        {
          src: "/projects/jollof-bowl/web-2.jpg",
          label: "How It Works",
          alt: "Jollof Bowl build-your-bowl steps section",
        },
        {
          src: "/projects/jollof-bowl/web-3.jpg",
          label: "Find Us",
          alt: "Jollof Bowl location and contact section",
        },
        {
          src: "/projects/jollof-bowl/web-4.jpg",
          label: "Social",
          alt: "Jollof Bowl social and video highlights section",
        },
      ],
    },
    role: "Frontend Developer",
    year: "2025",
    type: "Marketing Site",
    overview: [
      "Jollof Bowl is the public-facing brand site for a West African fast-casual restaurant. It communicates culture and flavor first, then guides guests toward ordering and catering.",
      "The design leans into a bold red palette, geometric patterns, and food photography so the brand feels energetic and unmistakably on-theme.",
    ],
    features: [
      "Hero storytelling with clear CTAs for Order Online and Book Catering",
      "Menu and bowl highlights that showcase signature offerings",
      "Catering paths for social, corporate, and food-truck events",
      "Location, hours, and contact details for Cross Street Market in Baltimore",
      "Mobile-first layout that keeps the brand impactful on smaller screens",
    ],
    outcome:
      "A production brand site that converts curiosity into orders and catering bookings while staying true to the restaurant’s cultural identity.",
  },
  {
    id: "billflow",
    title: "Billflow",
    description:
      "Billing and invoicing web app with client records, PDF export, and a linked mobile companion.",
    tags: ["React", "TypeScript", "Supabase"],
    image: "/projects/billflow.jpg",
    repoUrl: `${GITHUB_USER}/Billflow_Frontend`,
    liveUrl: "https://billflowweb.netlify.app/",
    gallery: {
      web: [
        {
          src: "/projects/billflow/web-1.jpg",
          label: "Landing page",
          alt: "Billflow marketing landing page",
        },
        {
          src: "/projects/billflow/web-2.jpg",
          label: "Documents",
          alt: "Billflow documents list dashboard",
        },
        {
          src: "/projects/billflow/web-3.jpg",
          label: "Templates",
          alt: "Billflow choose a receipt template",
        },
        {
          src: "/projects/billflow/web-4.jpg",
          label: "Document detail",
          alt: "Billflow estimate document detail page",
        },
      ],
      mobile: [
        {
          src: "/projects/billflow/mobile-1.jpg",
          label: "Home",
          alt: "Billflow mobile home dashboard",
        },
        {
          src: "/projects/billflow/mobile-2.jpg",
          label: "Documents",
          alt: "Billflow mobile documents list",
        },
        {
          src: "/projects/billflow/mobile-3.jpg",
          label: "Template",
          alt: "Billflow mobile choose template screen",
        },
        {
          src: "/projects/billflow/mobile-4.jpg",
          label: "Preview",
          alt: "Billflow mobile document preview",
        },
        {
          src: "/projects/billflow/mobile-5.jpg",
          label: "Share",
          alt: "Billflow mobile invoice saved share screen",
        },
      ],
    },
    role: "Frontend Developer",
    year: "2026",
    type: "Web App",
    overview: [
      "Billflow helps freelancers and small businesses create invoices, track clients, and export documents for payment workflows.",
      "Built with React, TypeScript, and Supabase, it pairs a web dashboard with a mobile companion so billing stays accessible on the go.",
    ],
    features: [
      "Client and invoice record management",
      "PDF generation for shareable invoices (html2canvas + jsPDF)",
      "Supabase-backed data and authentication foundations",
      "Typed React UI with routing for multi-view workflows",
      "Companion mobile app for on-the-go billing access",
    ],
    outcome:
      "A practical billing toolkit that shows end-to-end product thinking — data models, document export, and cross-platform reach.",
  },
  {
    id: "stockbook",
    title: "Stockbook",
    description:
      "Inventory and stock-tracking dashboard for managing products, quantities, and business records.",
    tags: ["React", "TypeScript", "Supabase"],
    image: "/projects/stockbook.jpg",
    repoUrl: `${GITHUB_USER}/Stockbook_frontend`,
    liveUrl: "https://stockbookweb.netlify.app/",
    gallery: {
      web: [
        {
          src: "/projects/stockbook/web-1.jpg",
          label: "Dashboard",
          alt: "Stockbook inventory dashboard with sales and low-stock alerts",
        },
        {
          src: "/projects/stockbook/web-2.jpg",
          label: "Products",
          alt: "Stockbook products inventory table",
        },
        {
          src: "/projects/stockbook/web-3.jpg",
          label: "Sales",
          alt: "Stockbook sales overview and weekly chart",
        },
        {
          src: "/projects/stockbook/web-4.jpg",
          label: "Insights",
          alt: "Stockbook shop insights and revenue trend",
        },
        {
          src: "/projects/stockbook/web-5.jpg",
          label: "Preferences",
          alt: "Stockbook shop preferences and business type settings",
        },
      ],
      mobile: [
        {
          src: "/projects/stockbook/mobile-1.jpg",
          label: "Home",
          alt: "Stockbook mobile home dashboard",
        },
        {
          src: "/projects/stockbook/mobile-2.jpg",
          label: "Sales",
          alt: "Stockbook mobile sales screen",
        },
        {
          src: "/projects/stockbook/mobile-3.jpg",
          label: "Products",
          alt: "Stockbook mobile products list",
        },
        {
          src: "/projects/stockbook/mobile-4.jpg",
          label: "More",
          alt: "Stockbook mobile more menu",
        },
        {
          src: "/projects/stockbook/mobile-5.jpg",
          label: "Insights",
          alt: "Stockbook mobile insights screen",
        },
      ],
    },
    role: "Frontend Developer",
    year: "2026",
    type: "Web App",
    overview: [
      "Stockbook is an inventory dashboard for tracking products, quantities, and day-to-day stock movement.",
      "It uses React Query for data fetching, form validation with Zod, and Supabase for backend services — built for operators who need clarity over complexity.",
    ],
    features: [
      "Product and quantity tracking across inventory records",
      "Validated forms for reliable stock updates",
      "React Query for cached, responsive data loading",
      "Supabase integration for auth and persistence",
      "Companion mobile experience for inventory on the floor",
    ],
    outcome:
      "A focused operations tool that makes stock levels easy to review and update without drowning users in dashboard noise.",
  },
  {
    id: "tripsplitz",
    title: "TripSplitz",
    description:
      "Cross-platform mobile app for splitting travel costs and tracking shared expenses.",
    tags: ["React Native", "TypeScript"],
    image: "/projects/tripsplitz.jpg",
    gallery: {
      mobile: [
        {
          src: "/projects/tripsplitz/mobile-1.jpg",
          label: "Home",
          alt: "TripSplitz home with trips and current expense",
        },
        {
          src: "/projects/tripsplitz/mobile-2.jpg",
          label: "Notifications",
          alt: "TripSplitz notifications inbox",
        },
        {
          src: "/projects/tripsplitz/mobile-3.jpg",
          label: "Profile",
          alt: "TripSplitz my profile screen",
        },
        {
          src: "/projects/tripsplitz/mobile-4.jpg",
          label: "Trip",
          alt: "TripSplitz trip detail screen",
        },
      ],
    },
    role: "Mobile Developer",
    year: "2025",
    type: "Mobile App",
    overview: [
      "TripSplitz solves a common travel headache: who paid for what, and who owes whom. Groups can log shared costs and keep balances transparent throughout a trip.",
      "Built with React Native and TypeScript for a consistent experience on iOS and Android.",
    ],
    features: [
      "Shared expense logging for trips and groups",
      "Clear balance views so everyone knows what’s owed",
      "Cross-platform React Native UI",
      "TypeScript for safer mobile data flows",
    ],
    outcome:
      "A practical travel companion that keeps money talk simple so the trip stays fun.",
  },
  {
    id: "portfolio",
    title: "Temi Forge Portfolio",
    description:
      "Personal portfolio with theme toggle, project showcase, and EmailJS contact integration.",
    tags: ["React", "Vite", "Tailwind CSS"],
    image: "/projects/portfolio.jpg",
    repoUrl: `${GITHUB_USER}/portfolio`,
    liveUrl: "/",
    gallery: {
      web: [
        {
          src: "/projects/portfolio/web-1.jpg",
          label: "Home",
          alt: "Temi Forge portfolio homepage hero",
        },
      ],
    },
    role: "Designer & Developer",
    year: "2026",
    type: "Portfolio Site",
    overview: [
      "This site is the living portfolio for Temi Forge — a single-page experience with deep project pages, theme switching, and a working contact form.",
      "It uses Bronze Spice branding, Tailwind v4 semantic tokens, and a scroll-spy navigation shell that stays readable in light and dark modes.",
    ],
    features: [
      "Scroll-spy navigation across Home, Portfolio, About, Services, and Contact",
      "Project detail pages with full case-study content",
      "Light / dark theme with FOUC-safe persistence",
      "EmailJS-powered contact form",
      "Responsive layouts tuned for mobile and desktop",
    ],
    outcome:
      "A branded, maintainable portfolio that showcases real work and makes it easy for clients to get in touch.",
  },
];

export function getProjectById(id) {
  return PROJECTS.find((project) => project.id === id) ?? null;
}

export function getRelatedProjects(id, limit = 3) {
  return PROJECTS.filter((project) => project.id !== id).slice(0, limit);
}
