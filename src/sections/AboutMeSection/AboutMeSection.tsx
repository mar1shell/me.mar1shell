import { motion } from "motion/react";
import TerminalTemplate from "../../components/TerminalTemplate/TerminalTemplate";
import SectionTitle from "../../components/common/SectionTitle/SectionTitle";

export default function AboutMeSection() {
  return (
    <section className="justify- mt-3 flex flex-col items-center">
      <SectionTitle title="About Me" />
      <motion.div
        initial={{ opacity: 0, x: -300 }}
        transition={{
          duration: 0.3,
          delay: 0.3,
          type: "spring",
          stiffness: 60,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <TerminalTemplate />
      </motion.div>
    </section>
  );
}
