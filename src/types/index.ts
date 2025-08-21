import type { JSX } from "react";

// General

interface SectionTitleProps {
  title: string;
  delay?: number;
}

// Navbar

interface NavBarLinkProps {
  href: string;
  content?: string | JSX.Element;
}

// Hero section

interface AvatarProps {
  src?: string;
  alt?: string;
}

interface HeroCaption {
  content: string;
}

interface SocialMediaIconProps {
  link: string;
  title: string;
  icon: React.ReactNode;
  hoveredIcon: React.ReactNode;
  index: number;
}

// about me section

interface TerminalTemplateProps {
  username: string;
  command: string;
  bio: string | JSX.Element;
  className?: string;
}

interface TerminalData {
  username: string;
  command: string;
  bio: string;
}

// projects section

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

interface ProjectCardProps {
  project: Project;
  index: number;
}
// Experiences

type Experience = {
  title: string;
  company: string;
  logo: string;
  location: string;
  period: string;
  duration: string;
  type: string;
  description: string;
  achievements: string[];
  skills: string[];
  current: boolean;
  featured: boolean;
  detailsLink: string;
  connectLink: string;
};

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

interface FloatingTechnologiesBadgeProps {
  technologies: string[];
  companyName: string;
}

interface TechnologiesModalProps {
  isOpen: boolean;
  onClose: () => void;
  technologies: string[];
  companyName: string;
}

// Footer

type SocialLink = {
  icon: () => JSX.Element;
  label: string;
  href: string;
  color: string;
  bgColor: string;
};

type Stat = {
  icon: JSX.ElementType;
  label: string;
  value: string;
  color: string;
};

interface StatsProps {
  stat: Stat;
  index: number;
}

export type {
  NavBarLinkProps,
  AvatarProps,
  TerminalTemplateProps,
  SocialLink,
  Stat,
  Experience,
  Project,
  HeroCaption,
  TerminalData,
  SocialMediaIconProps,
  SectionTitleProps,
  ProjectCardProps,
  ExperienceCardProps,
  FloatingTechnologiesBadgeProps,
  TechnologiesModalProps,
  StatsProps,
};
