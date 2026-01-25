import type { Achievement } from "../../types";
import { Trophy } from "lucide-react";

interface AchievementCardProps {
  achievement: Achievement;
}

const AchievementCard = ({ achievement }: AchievementCardProps) => {
  const CardContent = () => (
    <>
      {/* Image Area - Dominant Feature */}
      <div className="relative h-64 w-full overflow-hidden bg-gray-100 dark:bg-black/40">
        <img
          src={achievement.image || "/images/placeholder-achievement.jpg"}
          alt={achievement.title}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "https://placehold.co/600x400/1e293b/475569?text=Achievement";
          }}
        />
        {/* Overlay gradient for text readability if needed, though text is below now */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Date Badge over Image */}
        <div className="absolute top-4 right-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-gray-900 shadow-md backdrop-blur-md dark:bg-black/60 dark:text-white">
          {achievement.date}
        </div>
      </div>

      {/* Caption Content Below */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-yellow-100 text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-500">
              {achievement.icon || <Trophy size={16} />}
            </div>
            {achievement.rank && (
              <span className="rounded-md bg-blue-100 px-2 py-1 text-xs font-bold text-blue-700 dark:bg-blue-900/30 dark:text-green-400">
                {achievement.rank}
              </span>
            )}
          </div>
        </div>

        <h3 className="font-display mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-green-400">
          {achievement.title}
        </h3>

        <p className="line-clamp-3 text-sm text-gray-600 dark:text-gray-400">
          {achievement.description}
        </p>

        {achievement.team && (
          <p className="mt-4 text-xs font-medium text-gray-500 dark:text-gray-500">
            Team: {achievement.team}
          </p>
        )}
      </div>
    </>
  );

  const containerClasses =
    "group relative flex flex-col overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-lg transition-all duration-300  hover:shadow-2xl dark:border-white/10 dark:bg-white/5 backdrop-blur-md h-full";

  if (achievement.link) {
    return (
      <a
        href={achievement.link}
        target="_blank"
        rel="noopener noreferrer"
        className={containerClasses}
        data-aos="fade-up"
      >
        <CardContent />
      </a>
    );
  }

  return (
    <div className={containerClasses} data-aos="fade-up">
      <CardContent />
    </div>
  );
};

export default AchievementCard;
