import Navbar from "@/components/Navbar";
import { dbConnect } from "@/service/mongo";
import { Inter } from "next/font/google";
import { Toaster } from 'sonner';
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Stay Swift",
  description: "One place stop for Hospitality",
};

export default async function RootLayout({ children }) {
  await dbConnect();
  return (
    <html lang="en">
      <body className={inter.className}>
      <Toaster position="top-center" />
        <Navbar sideMenu={false} />
        <main>{children}</main>
      </body>
    </html>
  );
}
