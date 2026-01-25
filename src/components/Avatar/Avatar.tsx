import type { AvatarProps } from "../../types";

function Avatar({ src = "/images/avatar.webp", alt = "Avatar" }: AvatarProps) {
  return (
    <div className="flex items-center justify-center transition md:col-span-2">
      <div
        data-aos="fade-right"
        className="group relative h-55 w-55 rounded-full bg-gradient-to-tr from-blue-700 via-cyan-600 to-teal-700 p-1 shadow-2xl md:h-72 md:w-72 xl:h-80 xl:w-80 dark:from-teal-600 dark:via-lime-600 dark:to-green-700"
      >
        <img
          src={src}
          alt={alt}
          fetchPriority="high"
          width="288"
          height="288"
          loading="eager"
          decoding="async"
          className="pointer-events-none h-full w-full rounded-full border-4 border-white bg-gray-100 object-cover shadow-inner dark:border-gray-900 dark:bg-gray-800"
        />

        {/* Tooltip */}
        <span className="absolute top-full left-1/2 mt-4 -translate-x-1/2 scale-95 rounded-full border border-white/10 bg-black/80 px-4 py-2 text-xs font-bold text-white opacity-0 shadow-xl backdrop-blur-md transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
          This is me! 👋
        </span>

        {/* Glow Ring */}
        <span className="pointer-events-none absolute inset-0 -z-10 rounded-full bg-gradient-to-tr from-blue-700/40 via-cyan-600/40 to-teal-600/40 opacity-70 blur-2xl transition-opacity duration-300 group-hover:opacity-100 dark:from-teal-600/40 dark:via-lime-600/40 dark:to-green-700/40"></span>
      </div>
    </div>
  );
}

export default Avatar;
