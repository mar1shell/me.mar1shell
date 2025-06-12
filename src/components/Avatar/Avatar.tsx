import { motion } from "motion/react";

interface AvatarProps {
  src?: string;
  alt?: string;
}

export default function Avatar({
  src = "/images/avatar.JPG",
  alt = "Avatar",
}: AvatarProps) {
  return (
    <div className="col-span-2 flex items-center justify-center transition">
      <motion.div
        initial={{ x: -300, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.2,
          type: "spring",
          stiffness: 50,
          damping: 20,
          ease: "easeOut",
        }}
        whileHover={{ scale: 1.05 }}
        drag
        dragElastic={0.2}
        dragSnapToOrigin
        dragTransition={{ bounceStiffness: 100, bounceDamping: 20 }}
        whileTap={{ scale: 0.95 }}
        className="group interactive relative h-72 w-72 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-teal-400 p-3 shadow-2xl dark:from-teal-400 dark:via-lime-500 dark:to-green-600"
      >
        <img
          src={src}
          alt={alt}
          className="pointer-events-none h-full w-full rounded-full border-8 border-white object-cover shadow-xl"
        />

        {/* Tooltip */}
        <span className="absolute top-full left-1/2 mt-2 -translate-x-1/2 scale-95 rounded bg-black px-2 py-1 text-xs text-white opacity-0 shadow transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
          Drag me!
        </span>

        <span className="pointer-events-none absolute inset-0 rounded-full ring-8 ring-white/20 dark:ring-black/30"></span>
      </motion.div>
    </div>
  );
}
