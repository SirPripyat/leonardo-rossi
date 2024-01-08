import Footer from "./components/Footer/Footer";
import { TopAppBar } from "./components/TopAppBar/TopAppBar";
import "./styles/globalStyles.scss";
import { Poppins } from "next/font/google";
import { Metadata } from "next";
import { MenuMobile } from "./components/MenuMobile/MenuMobile";
import { LanguageProvider } from "./context/languageContext/LanguageContext";

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
        <LanguageProvider>
          <TopAppBar />
          <MenuMobile />
          {children}
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
