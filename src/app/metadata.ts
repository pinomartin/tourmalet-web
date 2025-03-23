import { Metadata } from "next";

const defaultMetadata: Metadata = {
  title: {
    default: "El Tourmalet - La tienda del ciclista en Estepona",
    template: "%s | El Tourmalet",
  },
  description:
    "La tienda del ciclista en Estepona, especializados en compra y alquiler de bicicletas. Taller de reparación, bicicletas de montaña, eléctricas y más.",
  keywords: [
    "bicicletas",
    "ciclismo",
    "Estepona",
    "taller",
    "reparación",
    "alquiler",
    "bicicletas eléctricas",
    "mountain bike",
    "tienda de bicicletas",
    "accesorios ciclismo",
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
  },
  openGraph: {
    title: "El Tourmalet - La tienda del ciclista en Estepona",
    description:
      "Especialistas en venta y alquiler de bicicletas en Estepona. Taller de reparación profesional.",
    url: "https://eltourmalet.com",
    siteName: "El Tourmalet",
    images: [
      {
        url: "https://ext.same-assets.com/3643569872/1148576980.png",
        width: 800,
        height: 400,
        alt: "El Tourmalet Logo",
      },
    ],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Tourmalet - La tienda del ciclista en Estepona",
    description:
      "Especialistas en venta y alquiler de bicicletas en Estepona. Taller de reparación profesional.",
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
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  verification: {
    google: "your-google-site-verification",
  },
  category: "Sports & Recreation",
};

export default defaultMetadata; 