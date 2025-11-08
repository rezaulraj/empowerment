// variants.ts
import { Variants } from "framer-motion";

// Fix: Use specific string literals for type property
export const drawerVariants: Variants = {
  initial: {
    y: "100%",
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring", // ✅ Use string literal, not generic string
      stiffness: 300,
      damping: 30,
      mass: 1,
      duration: 0.5,
    },
  },
  exit: {
    y: "100%",
    opacity: 0,
    transition: {
      type: "tween", // ✅ Use string literal
      ease: "easeIn",
      duration: 0.3,
    },
  },
};

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut", // ✅ Use named easing
    },
  },
};

export const organizationContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      duration: 0.8,
    },
  },
};

export const organizationItemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut", // ✅ Use named easing
    },
  },
};
