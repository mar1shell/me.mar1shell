interface props {
  content: string;
}

export default function HeroCaption({ content }: props) {
  return (
    <li className="mb-2 text-gray-600 transition-transform duration-300 hover:translate-x-3 dark:text-gray-400">
      {content}
    </li>
  );
}
