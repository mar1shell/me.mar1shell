import "./AnimatedBackground.css";

export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-white dark:bg-gray-900">
      {/* Light mode gradient background */}
      <div className="absolute inset-0 dark:hidden">
        {/* Base gradient - bluish theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-slate-100 to-blue-100" />

        {/* Primary vibrant blobs with stronger presence */}
        <div
          className={`animate-blob absolute top-1/4 left-1/4 h-[550px] w-[550px] rounded-full bg-blue-500 opacity-50 mix-blend-multiply blur-3xl filter`}
        />
        <div
          className={`animate-blob animation-delay-2000 absolute top-1/3 right-1/4 h-[550px] w-[550px] rounded-full bg-cyan-500 opacity-55 mix-blend-multiply blur-3xl filter`}
        />
        <div
          className={`animate-blob animation-delay-4000 absolute bottom-1/4 left-1/3 h-[550px] w-[550px] rounded-full bg-sky-400 opacity-45 mix-blend-multiply blur-3xl filter`}
        />

        {/* Additional accent blobs for more visual interest */}
        <div
          className={`animate-blob animation-delay-2000 absolute top-1/2 right-1/3 h-96 w-96 rounded-full bg-indigo-400 opacity-40 mix-blend-multiply blur-3xl filter`}
        />
        <div
          className={`animate-blob animation-delay-4000 absolute right-1/4 bottom-1/3 h-96 w-96 rounded-full bg-teal-400 opacity-45 mix-blend-multiply blur-3xl filter`}
        />
      </div>

      {/* Dark mode gradient background */}
      <div className="absolute inset-0 hidden dark:block">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />

        <div
          className={`animate-blob absolute top-1/4 left-1/4 h-[500px] w-[500px] rounded-full bg-teal-500 opacity-30 mix-blend-screen blur-3xl filter`}
        />
        <div
          className={`animate-blob animation-delay-2000 absolute top-1/3 right-1/4 h-[500px] w-[500px] rounded-full bg-lime-500 opacity-25 mix-blend-screen blur-3xl filter`}
        />
        <div
          className={`animate-blob animation-delay-4000 absolute bottom-1/4 left-1/3 h-[500px] w-[500px] rounded-full bg-green-500 opacity-20 mix-blend-screen blur-3xl filter`}
        />
      </div>

      {/* Additional subtle accent lines for modern feel */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 left-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent dark:via-green-500/20" />
        <div className="absolute right-0 bottom-0 left-0 h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent dark:via-green-500/20" />
      </div>
    </div>
  );
}
