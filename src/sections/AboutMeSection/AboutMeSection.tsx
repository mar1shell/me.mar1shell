import { motion } from "motion/react";
import TerminalTemplate from "../../components/TerminalTemplate/TerminalTemplate";
import SectionTitle from "../../components/common/SectionTitle/SectionTitle";

export default function AboutMeSection() {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-6">
      <SectionTitle title="About Me" />
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        transition={{
          duration: 0.6,
          delay: 0.2,
          type: "spring",
          stiffness: 60,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        className="w-full"
      >
        <TerminalTemplate />
      </motion.div>
    </section>
  );
}
