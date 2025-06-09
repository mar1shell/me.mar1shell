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
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        transition={{
          duration: 0.8,
          type: "spring",
          stiffness: 50,
          ease: "easeOut",
        }}
        className="relative h-72 w-72 rounded-full bg-gradient-to-tr from-blue-500 via-cyan-400 to-teal-400 p-3 shadow-2xl dark:from-teal-400 dark:via-lime-500 dark:to-green-600"
      >
        <img
          src={src}
          alt={alt}
          className="h-full w-full rounded-full border-8 border-white object-cover shadow-xl"
        />
        <span className="pointer-events-none absolute inset-0 rounded-full ring-8 ring-white/20 dark:ring-black/30"></span>
      </motion.div>
    </div>
  );
}
