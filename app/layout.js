// app/layout.js
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar"; // Ensure this path is correct
import Footer from "@/components/footer/Footer"; // Ensure this path is correct


const inter = Poppins({ weight:['100','200','300','400','500','600','700','800','900'],subsets: ["latin"] });

export const metadata = {
  title: "Shopex Agency – Driving Digital Excellence",
  description: "Boost your online presence with a Shopex digital marketing strategy focusing on ROI to deliver desired outcomes. Shopex's dedicated team is determined to help grow your business.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="max-w-[1500px] mx-auto">

        {children}

        </div>
        <Footer />

      </body>
    </html>
  );
}
