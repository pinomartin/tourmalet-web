import { Metadata } from "next";

const defaultMetadata: Metadata = {
  title: {
    default: "El Tourmalet - Tienda, Taller y Club de Ciclismo en Estepona",
    template: "%s | El Tourmalet",
  },
  description:
    "El Tourmalet es su tienda especializada en ciclismo en Estepona. Venta y alquiler de bicicletas de montaña, carretera y eléctricas. Taller de reparación profesional y club de ciclismo para todos los niveles.",
  keywords: [
    "bicicletas",
    "ciclismo",
    "Estepona",
    "taller bicicletas",
    "reparación bicicletas",
    "alquiler bicicletas",
    "bicicletas eléctricas",
    "mountain bike",
    "MTB",
    "tienda de bicicletas",
    "accesorios ciclismo",
    "club ciclismo",
    "triatlón",
    "cuadros carbono",
    "mantenimiento bicicletas",
  ],
  authors: [{ name: "El Tourmalet" }],
  creator: "El Tourmalet",
  publisher: "El Tourmalet",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://eltourmalet.com"),
  alternates: {
    canonical: "/",
    languages: {
      'es-ES': 'https://eltourmalet.com'
    }
  },
  openGraph: {
    title: "El Tourmalet - Tienda, Taller y Club de Ciclismo en Estepona",
    description:
      "Especialistas en venta y alquiler de bicicletas en Estepona. Bicicletas de montaña, carretera y eléctricas. Taller de reparación profesional y club de ciclismo.",
    url: "https://eltourmalet.com",
    siteName: "El Tourmalet",
    images: [
      {
        url: "https://ext.same-assets.com/3643569872/1148576980.png",
        width: 1200,
        height: 630,
        alt: "El Tourmalet - Tienda de ciclismo en Estepona",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Tourmalet - Tienda, Taller y Club de Ciclismo en Estepona",
    description:
      "Especialistas en venta y alquiler de bicicletas en Estepona. Bicicletas de montaña, carretera y eléctricas. Taller de reparación profesional y club de ciclismo.",
    images: ["https://ext.same-assets.com/3643569872/1148576980.png"],
    creator: "@eltourmalet",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    shortcut: "/favicon-16x16.png",
    apple: [
      { url: "/apple-touch-icon.png" },
      { url: "/apple-touch-icon-180x180.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
    minimumScale: 1,
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
  category: "Sports & Recreation",
  other: {
    'theme-color': '#ffc107',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'format-detection': 'telephone=no',
    'msapplication-TileColor': '#ffc107',
    'msapplication-config': '/browserconfig.xml'
  }
};

// JSON-LD structured data
export const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "El Tourmalet",
  "image": "https://ext.same-assets.com/3643569872/1148576980.png",
  "@id": "https://eltourmalet.com",
  "url": "https://eltourmalet.com",
  "telephone": "+34951273999",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle Parque Central 9, Local 1",
    "addressLocality": "Estepona",
    "postalCode": "29680",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 36.4271703,
    "longitude": -5.1599564
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "10:00",
      "closes": "14:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "17:00",
      "closes": "20:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "10:00",
      "closes": "14:00"
    }
  ],
  "sameAs": [
    "https://www.facebook.com/eltourmalet",
    "https://www.instagram.com/eltourmaletestepona/"
  ],
  "priceRange": "€€",
  "servesCuisine": "Sports Equipment",
  "areaServed": ["Estepona", "Costa del Sol", "Málaga"]
};

export default defaultMetadata; 