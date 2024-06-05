import type { Metadata } from "next";
import { Inter } from "next/font/google";
// import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Menuiserie Kaire | Menuisier Ebeniste",
  description: "Menuiserie Kaire | Menuisier Ebeniste",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css"/>
  
        <link rel="stylesheet" type="text/css" href="css/style.css"/>

        <link rel="stylesheet" href="css/responsive.css"/>

        <link rel="icon" href="images/fevicon.png" type="image/gif" />

        <link rel="stylesheet" href="css/jquery.mCustomScrollbar.min.css" />

        <link rel="stylesheet" href="https://netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.css" />

        <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400;500;600;800&family=Sen:wght@400;700;800&display=swap" rel="stylesheet" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
