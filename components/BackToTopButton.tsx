"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Button } from "./ui/button";

export default function BackToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const targetSection = document.getElementById("services");

    const handleScroll = () => {
      if (targetSection) {
        const sectionTop = targetSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        setShowButton(sectionTop <= windowHeight / 2);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {showButton && (
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 60 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className="fixed bottom-6 right-6 z-50"
        >
          <Button
            onClick={scrollToTop}
            className="rounded-full text-xs shadow-lg"
          >
            <ArrowUp className="w-4 h-4 mr-1" /> Topo
          </Button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
