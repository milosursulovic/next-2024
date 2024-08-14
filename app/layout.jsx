import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Traversy Media",
  description: "Web development tutorials and courses",
  keywords:
    "web development, web design, javascript, react, node, angular, vue, html, css",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
