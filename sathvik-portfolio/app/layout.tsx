import "./globals.css";

import ThemeProvider from "@/components/providers/ThemeProvider";
import LoadingScreen from "@/components/LoadingScreen";
import Background from "@/components/effects/Background";
import CursorGlow from "@/components/effects/CursorGlow";
import ScrollProgress from "@/components/effects/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/effects/BackToTop";
import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en" suppressHydrationWarning
    >
      <body>

  <ThemeProvider>

    <LoadingScreen />

    <Background />

    <CursorGlow />

    <ScrollProgress />

    <Navbar />

    {children}

    <Toaster
  position="top-right"
  toastOptions={{
    style: {
      background: "#0f172a",
      color: "#fff",
    },
  }}
/>

    <Footer />

    <BackToTop />

  </ThemeProvider>

</body>
    </html>
  );
}