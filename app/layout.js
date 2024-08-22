import { Inter } from "next/font/google";
import "./globals.css";
import App from "../components/App";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    template: "Ecom Project",
    default: "Ecom Project",
  },
  description: "Ecom Project",
  openGraph: {
    title: "Ecom Project",
    description: "Ecom Project",
    url: '',
    siteName: '',
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <App>
          {children}
        </App>
      </body>
    </html>
  );
}
