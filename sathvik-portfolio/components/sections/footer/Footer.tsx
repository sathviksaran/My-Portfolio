"use client";

import { motion } from "framer-motion";

import FooterBrand from "./FooterBrand";
import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";
import FooterBottom from "./FooterBottom";
import BackToTop from "./BackToTop";

export default function Footer() {
  return (
    <footer
      className="border-t bg-background"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 py-16"
      >
        <div className="grid gap-10 md:grid-cols-3">
          <FooterBrand />
          <FooterLinks />
          <FooterSocials />
        </div>

        <FooterBottom />
      </motion.div>

      <BackToTop />
    </footer>
  );
}