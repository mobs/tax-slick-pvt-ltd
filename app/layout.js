import { GoogleTagManager } from '@next/third-parties/google';
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Tax Slick | A Tax Advisory Firm | Private Limited Company Registration",
  description: "",
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#5bbad5',
      },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      </head>
      <body className={`font-caslon overflow-x-hidden w-screen`} style={{ backgroundPosition:'center', backgroundSize:'cover'}}>
        <div className="w-screen flex justify-between z-50">
          <Navbar />
        </div>
        <div className="w-full"> {children} </div>

        <div>
          <Footer />
        </div>
      </body>
      <GoogleTagManager gtmId="GTM-" />
    </html>
  );
}
