interface HeroCaption {
  content: string;
}

const heroCaptions: HeroCaption[] = [
  {
    content: "🌍 Based in Casablanca, Morocco",
  },
  {
    content:
      "💻 Passionate about crafting impactful full-stack web applications",
  },
  {
    content: "💼 AI Trainer at Outlier AI and enthusiastic software builder",
  },
  {
    content:
      "📚 Exploring software engineering deeply through projects and study",
  },
];

interface TerminalData {
  username: String;
  command: String;
  bio: String;
}

const terminalData: TerminalData = {
  username: "mar1shell",
  command: "cat aboutmar1.txt",
  bio: "Hey! I'm Marouane, a Computer Science & AI student at ENSAM Casablanca. I love solving LeetCode problems, building fullstack apps, and walking the streets of Casablanca with a playlist full of diverse music. I’m passionate about software engineering, currently diving into backend fundamentals and crafting clean, meaningful code. I also enjoy volunteering, reading the news, and dreaming big. Hire me before I join the Night’s Watch. 😉",
};

interface Project {
  id: number;
  title: string;
  description: string;
  imageDesktop: string;
  imageMobile?: string;
  technologies: string[];
  liveDemo?: string;
  sourceCode?: string;
  featured?: boolean;
  unfinished?: boolean;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Finex - Financial Management App",
    description:
      "A full-stack financial management application to help users track their income, expenses, budgets, and financial goals. Built with React, Tailwind CSS, and Django REST Framework. Includes smooth UI animations and a modern analytics dashboard.",
    imageDesktop: "/images/projects/finex/desktop.jpg",
    imageMobile: "/images/projects/finex/mobile.jpg",
    technologies: [
      "React",
      "Tailwind CSS",
      "Django",
      "Django REST",
      "Framer Motion",
    ],
    liveDemo: "https://finex.ensamien.com", // Replace with real URL if available
    sourceCode: "https://github.com/mar1shell", // Replace with your actual repo link
    featured: true,
    unfinished: true,
  },
  {
    id: 2,
    title: "Portfolio Website",
    description:
      "A modern, responsive portfolio website built with React, Typescript and Tailwind CSS featuring dark mode and smooth animations.",
    imageDesktop: "/images/projects/portfolio/desktop.jpg",
    imageMobile: "/images/projects/portfolio/mobile.jpg",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveDemo: "https://mar1shell.me",
    sourceCode: "https://github.com/mar1shell",
    featured: true,
    unfinished: true,
  },
];

const experiences = [
  {
    title: "Frontend Developer & AI Trainer",
    company: "Outlier AI",
    logo: "/images/experiences/outlier.png",
    location: "Remote",
    period: "Dec 2024 - Present",
    duration: "2+ months",
    type: "Part-time",
    description:
      "Reviewing AI-generated frontend code and optimizing programs for machine learning pipelines while contributing to AI model training through data annotation and voice recordings.",
    achievements: [
      "Selected as a top contributor among 500+ applicants in a Frontend Project",
      "Selected as a reviewer for diffrent AI projects",
    ],
    skills: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Python",
      "JavaScript",
      "C Programming",
      "Machine Learning",
      "Data Annotation",
      "LLM Training",
    ],
    current: true,
    featured: true,
  },
  {
    title: "Fullstack Developer Intern",
    company:
      "ONEE - BE Casablanca (National Office of Electricity and Drinking Water - Branch of Electricity)",
    logo: "/images/experiences/onee.jpeg",
    location: "Casablanca, Morocco",
    period: "Summer 2025",
    duration: "1 months",
    type: "Internship",
    description:
      "Upcoming internship focused on developing energy management systems and infrastructure solutions for Morocco's national electricity network.",
    achievements: [],
    skills: [
      "Python",
      "Data Analysis",
      "Energy Systems",
      "Database Management",
      "System Architecture",
      "Project Planning",
    ],
    current: true,
    featured: false,
  },

  {
    title: "Computer Science & AI Student",
    company: "ENSAM Casablanca",
    logo: "/images/experiences/ensam.png",
    location: "Casablanca, Morocco",
    period: "2022 - Present",
    duration: "2+ years",
    type: "Education",
    description:
      "Pursuing advanced degree in Computer Science with specialization in Artificial Intelligence. Active in academic projects and programming competitions.",
    achievements: [
      "Top 3 out of 300+ students in first two years",
      "Maintained strong academic performance in core CS subjects",
      "Actively participated in coding competitions and hackathons",
    ],
    skills: [
      "Algorithms",
      "Data Structures",
      "Machine Learning",
      "Mathematics",
      "Problem Solving",
      "Software Engineering",
    ],
    current: true,
    featured: false,
  },
];

export { heroCaptions, terminalData, projects, experiences };
