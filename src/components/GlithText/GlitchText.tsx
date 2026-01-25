import "./GlitchText.css";

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText = ({ text, className = "" }: GlitchTextProps) => {
  return (
    <div className={`glitch-wrapper ${className}`}>
      <div className="glitch" data-text={text}>
        {text}
      </div>
    </div>
  );
};

export default GlitchText;
