import type { JSX } from "react";

// Navbar

interface NavBarLinkProps {
  href: string;
  className?: string;
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

interface ProjectsSectionProps {
  className?: string;
}

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
// EXperinces

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

// Footer

type SocialLink = {
  icon: JSX.ElementType;
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

export type {
  NavBarLinkProps,
  AvatarProps,
  TerminalTemplateProps,
  ProjectsSectionProps,
  SocialLink,
  Stat,
  Experience,
  Project,
  HeroCaption,
  TerminalData,
  SocialMediaIconProps,
};
