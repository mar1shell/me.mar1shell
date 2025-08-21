function ActionButton({
  link,
  filled,
  icon,
  label,
}: {
  link: string;
  filled: boolean;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="cursor-pointer"
    >
      <button
        className={` ${filled ? "cursor-pointer bg-blue-400 hover:shadow-blue-400/25 dark:bg-green-400" : "gap-2 border-2 border-blue-400 bg-transparent text-blue-400 hover:bg-blue-500 hover:text-gray-900 dark:border-green-400 dark:text-green-400"} group/btn inline-flex scale-90 items-center rounded-full p-4 font-semibold transition-all duration-300 hover:scale-105 hover:bg-blue-500 hover:shadow-lg md:scale-100 dark:hover:bg-green-500`}
      >
        {icon}
        <span className="text-xm cursor-pointer">{label}</span>
      </button>
    </a>
  );
}

export default ActionButton;
