const { useEffect: useEffectBT, useRef: useRefBT, useState: useStateBT } = React;

function BlurText({ text, className = "", delayPerWordMs = 100, as: Tag = "p" }) {
  const ref = useRefBT(null);
  const [visible, setVisible] = useStateBT(false);

  useEffectBT(() => {
    const node = ref.current;
    if (!node) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && e.intersectionRatio >= 0.1) {
          setVisible(true);
          io.disconnect();
        }
      });
    }, { threshold: [0, 0.1, 0.5, 1] });
    io.observe(node);
    return () => io.disconnect();
  }, []);

  const words = String(text).split(" ");
  return (
    <Tag
      ref={ref}
      className={className}
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", rowGap: "0.1em" }}
    >
      {words.map((w, i) => (
        <span
          key={i}
          className={`blur-word${visible ? " in-view" : ""}`}
          style={{ animationDelay: `${(i * delayPerWordMs) / 1000}s` }}
        >
          {w}
        </span>
      ))}
    </Tag>
  );
}
window.BlurText = BlurText;
