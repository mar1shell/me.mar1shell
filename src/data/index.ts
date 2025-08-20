import {
  Github,
  Linkedin,
  Instagram,
  Code,
  Users,
  Zap,
  Facebook,
} from "lucide-react";

import type {
  SocialLink,
  HeroCaption,
  TerminalData,
  Project,
  Experience,
} from "../types";

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

// About me section

const terminalData: TerminalData = {
  username: "mar1shell",
  command: "cat aboutmar1.txt",
  bio: "Hey! I'm Marouane, a Computer Science & AI student at ENSAM Casablanca. I love solving LeetCode problems, building fullstack apps, and walking the streets of Casablanca with a playlist full of diverse music. I’m passionate about software engineering, currently diving into backend fundamentals and crafting clean, meaningful code. I also enjoy volunteering, reading the news, and dreaming big. Hire me before I join the Night’s Watch. 😉",
};

// Projects Section Data

const projects: Project[] = [
  {
    id: 0,
    title: "MonClavier - Moroccan Online Keyboard Store",
    description:
      "A modern e-commerce platform for selling laptop keyboards in Morocco. Built with React, TypeScript, and Express.js, featuring a responsive design and smooth user experience for browsing and purchasing keyboard products. Developed as a freelance project for a client.",
    imageDesktop: "/images/projects/monclavier/desktop.webp",
    imageMobile: "/images/projects/monclavier/mobile.png",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Express.js",
      "Node.js",
    ],
    liveDemo: "https://monclavier.mar1shell.me",
    featured: true,
    unfinished: true,
  },
  {
    id: 1,
    title: "Finex - Financial Management App",
    description:
      "A full-stack financial management application to help users track their income, expenses, budgets, and financial goals. Built with React, Tailwind CSS, and Django REST Framework. Includes smooth UI animations and a modern analytics dashboard.",
    imageDesktop: "/images/projects/finex/desktop.webp",
    imageMobile: "/images/projects/finex/mobile.webp",
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
    imageDesktop: "/images/projects/portfolio/desktop.webp",
    imageMobile: "/images/projects/portfolio/mobile.webp",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveDemo: "https://mar1shell.me",
    sourceCode: "https://github.com/mar1shell",
    featured: true,
    unfinished: true,
  },
];

// Experience Section Data

const experiences: Experience[] = [
  {
    title: "Frontend Developer & AI Trainer",
    company: "Outlier AI",
    logo: "/images/experiences/outlier.webp",
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
    detailsLink: "https://outlier.ai",
    connectLink:
      "https://www.linkedin.com/company/try-outlier/posts/?feedView=all",
  },
  {
    title: "Software Engineering Intern",
    company:
      "ONEE - BE Casablanca (National Office of Electricity and Drinking Water)",
    logo: "/images/experiences/onee.webp",
    location: "Casablanca, Morocco",
    period: "Summer 2025",
    duration: "1 month",
    type: "Internship",
    description:
      "Developed a full-stack recruitment management platform for external use at ONEE where candidates can view job offers, submit applications, and track their application status throughout the hiring process.",
    achievements: [
      "Built a complete full-stack web application using React and Express.js",
      "Collaborated with the DSI – Commercial IS Division to gather functional requirements",
    ],
    skills: [
      "React",
      "Express.js",
      "RESTful APIs",
      "Full-Stack Development",
      "Software Engineering",
      "Team Collaboration",
      "System Architecture",
    ],
    current: true,
    featured: false,
    detailsLink: "https://www.one.org.ma",
    connectLink: "",
  },

  {
    title: "Computer Science & AI Student",
    company: "ENSAM Casablanca",
    logo: "/images/experiences/ensam.webp",
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
    detailsLink: "https://ensam-casa.ma",
    connectLink: "https://www.linkedin.com/company/ensam-casa-officielle",
  },
];

// Footer Section Data

const socialLinks: SocialLink[] = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/mar1shell",
    color: "hover:text-gray-900 dark:hover:text-white",
    bgColor: "hover:bg-gray-900/10 dark:hover:bg-white/10",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/elhamdaouimarouane",
    color: "hover:text-blue-600 dark:hover:text-blue-400",
    bgColor: "hover:bg-blue-600/10 dark:hover:bg-blue-400/10",
  },
  {
    icon: Facebook,
    label: "Facebook",
    href: "https://web.facebook.com/elhamdaouimar1",
    color: "hover:text-blue-400 dark:hover:text-blue-300",
    bgColor: "hover:bg-blue-400/10 dark:hover:bg-blue-300/10",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://instagram.com/marouane",
    color: "hover:text-pink-500 dark:hover:text-pink-400",
    bgColor: "hover:bg-pink-500/10 dark:hover:bg-pink-400/10",
  },
];

const stats = [
  {
    icon: Code,
    label: "Lines of Code",
    value: "50K+",
    color: "text-blue-500 dark:text-green-400",
  },
  {
    icon: Users,
    label: "Happy Clients",
    value: "2+",
    color: "text-purple-500 dark:text-purple-400",
  },
  {
    icon: Zap,
    label: "Projects Built",
    value: "10+",
    color: "text-amber-500 dark:text-yellow-400",
  },
];

export {
  heroCaptions,
  terminalData,
  projects,
  experiences,
  socialLinks,
  stats,
};
