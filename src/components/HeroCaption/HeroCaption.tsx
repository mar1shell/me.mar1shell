interface props {
  content: string;
}

function HeroCaption({ content }: props) {
  return (
    <li className="mb-2 text-sm font-semibold text-gray-800 transition-transform duration-300 hover:translate-x-3 md:text-base dark:text-gray-200">
      {content}
    </li>
  );
}

export default HeroCaption;
