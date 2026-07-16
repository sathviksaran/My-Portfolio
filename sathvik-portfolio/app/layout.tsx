import "./globals.css";

import ThemeProvider from "@/components/providers/ThemeProvider";

import LoadingScreen from "@/components/LoadingScreen";
import Background from "@/components/effects/Background";
import CursorGlow from "@/components/effects/CursorGlow";
import ScrollProgress from "@/components/effects/ScrollProgress";
import BackToTop from "@/components/effects/BackToTop";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import { Toaster } from "react-hot-toast";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <LoadingScreen />

          <Background />

          <CursorGlow />

          <ScrollProgress />

          <Navbar />

          <main>{children}</main>

          <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
              duration: 4000,
              style: {
                background: "#0f172a",
                color: "#ffffff",
                border: "1px solid #1e293b",
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