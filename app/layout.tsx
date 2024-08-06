import type { Metadata } from "next";
import "./globals.css";
//import "../public/styles/EmailBody.module.css";

export const metadata: Metadata = {
  title: "DataOrb State Training Coordinators",
  description: "DataOrb State Training Coordinators/Metadata Specialists Recruitment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link rel="icon" href="/favicon.png" />
      <link id="skin" href="skins/default.css" rel="stylesheet" />
      <link href="css/bootstrap.min.css" rel="stylesheet" />
      <link href="css/style.css" rel="stylesheet" />
      <link href="css/overwrite.css" rel="stylesheet" />
      <script src="js/ie-emulation-modes-warning.js"></script>
      
    </head>
      <body className='email-body'>
        {children}
      </body>
    </html>
  );
}
