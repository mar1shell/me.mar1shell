import "./ScrollDownIndicator.css";

const ScrollDownIndicator = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  return (
    <div
      className="interactive scrolldown cursor-pointer"
      onClick={handleScroll}
    >
      <div className="chevrons">
        <div className="chevrondown" />
        <div className="chevrondown" />
      </div>
    </div>
  );
};

export default ScrollDownIndicator;
