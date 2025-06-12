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

const Projects: Project[] = [
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

export { heroCaptions, Projects };
