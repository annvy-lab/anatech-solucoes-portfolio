"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface AnimatedTypingTextProps {
  text?: string;
  waitTime?: number;
  typingSpeed?: number;
  deletingSpeed?: number;
  className?: string;
}

export function AnimatedTypingText({
  text = "Teste gratuitamente! 🚀💜",
  waitTime = 4000,
  typingSpeed = 100,
  deletingSpeed = 50,
  className = ""
}: AnimatedTypingTextProps) {
  // Começa com caractere invisível
  const [displayText, setDisplayText] = useState("\u200B");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText === text) {
      timer = setTimeout(() => setIsDeleting(true), waitTime);
    } else if (isDeleting && displayText === "\u200B") {
      setIsDeleting(false);
    } else {
      timer = setTimeout(() => {
        setDisplayText((prev) => {
          // Remove caractere invisível ao começar a digitar
          const cleanPrev = prev === "\u200B" ? "" : prev;
          return isDeleting
            ? cleanPrev.slice(0, -1) || "\u200B"
            : text.slice(0, cleanPrev.length + 1);
        });
      }, isDeleting ? deletingSpeed : typingSpeed);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, text, waitTime, typingSpeed, deletingSpeed]);

  return (
    <strong className={`text-xl text-foreground inline-flex mt-2 ${className}`}>
      {displayText}
      <motion.span
        aria-hidden
        className="inline-block w-[1ch] ml-0.5 border-l-2 border-foreground"
        initial={{ opacity: 1 }}
        animate={{ opacity: [1, 0, 1] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </strong>
  );
}
