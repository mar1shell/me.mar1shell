import AchievementCard from "../../components/Achievements/AchievementCard";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import { achievements } from "../../data";

const AchievementsSection = () => {
  return (
    <section id="achievements" className="w-full py-20">
      <SectionTitle title="Achievements" />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </section>
  );
};

export default AchievementsSection;
