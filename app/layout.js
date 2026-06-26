import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://neuraxis.example.com"),
  title: "Neuraxis — AI-Driven Data Automation Platform",
  description:
    "Neuraxis is the autonomous data automation platform. Ingest, transform, and route enterprise data with adaptive AI pipelines — secure, observable, and built for scale.",
  keywords: [
    "AI data automation",
    "data pipelines",
    "ETL automation",
    "AI workflow platform",
    "data orchestration",
    "Neuraxis",
  ],
  openGraph: {
    title: "Neuraxis — AI-Driven Data Automation Platform",
    description:
      "Autonomous pipelines, adaptive intelligence, governed at the speed of your data. Move past dashboards — automate decisions.",
    type: "website",
    siteName: "Neuraxis",
  },
  twitter: {
    card: "summary_large_image",
    title: "Neuraxis — AI-Driven Data Automation Platform",
    description:
      "Autonomous pipelines, adaptive intelligence, governed at the speed of your data.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Barlow:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white font-body antialiased">
        {children}
      </body>
    </html>
  );
}
