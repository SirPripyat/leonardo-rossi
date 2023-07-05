import Footer from "./components/Footer";
import { TopAppBar } from "./components/TopAppBar";
import "./styles/globalStyles.scss";
import { Poppins } from "next/font/google";
import { Metadata } from "next";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "700", "800"],
});

export const metadata: Metadata = {
  title: "Leonardo Rossi - FullStack Developer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <TopAppBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
