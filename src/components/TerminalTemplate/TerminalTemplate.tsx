import type { JSX } from "react";

interface TerminalTemplateProps {
  username?: string;
  command?: string;
  bio?: string | JSX.Element;
  className?: string;
}

export default function TerminalTemplate({
  username = "mar1shell",
  command = "cat aboutmar1.txt",
  bio = "Hey! I'm Marouane, a Computer Science & AI student at ENSAM Casablanca. I love solving LeetCode problems, building fullstack apps, and walking the streets of Casablanca with a playlist full of diverse music. I’m passionate about software engineering, currently diving into backend fundamentals and crafting clean, meaningful code. I also enjoy volunteering, reading the news, and dreaming big. Hire me before I join the Night’s Watch. 😉",
}: TerminalTemplateProps) {
  return (
    <div className="interactive mx-auto max-w-4xl overflow-hidden rounded-lg bg-gray-800 font-mono shadow-2xl dark:bg-gray-200">
      {/* Terminal Header */}
      <div className="flex items-center space-x-2 bg-gray-600 px-4 py-3 dark:bg-gray-400">
        <div className="h-3 w-3 rounded-full bg-red-500"></div>
        <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
        <div className="h-3 w-3 rounded-full bg-green-500"></div>
      </div>

      {/* Terminal Content */}
      <div className="bg-gray-800 p-6 font-mono text-sm leading-relaxed text-green-400 dark:bg-gray-300 dark:text-gray-700">
        {/* Command Line */}
        <div className="mb-4">
          <span className="text-cyan-400 dark:text-blue-600">{username}</span>
          <span className="text-white dark:text-gray-800"> $ </span>
          <span className="text-white dark:text-gray-800">{command}</span>
        </div>

        {/* Bio Content */}
        <div className="text-green-400 dark:text-gray-800">
          <span className="text-cyan-400 dark:text-blue-600">{command}</span>
          <span className="text-white dark:text-gray-800"> (main) $ </span>
          <span className="text-white dark:text-gray-800">{bio}</span>
        </div>
      </div>
    </div>
  );
}
