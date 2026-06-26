import "./globals.css";

export const metadata = {
  title: "Voyage — Venture Past Our Sky",
  description:
    "Discover the universe in ways once unimaginable. Pioneering vessels and breakthrough engineering bring deep-space exploration within reach.",
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
