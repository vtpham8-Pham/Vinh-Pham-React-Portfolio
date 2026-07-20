import { useEffect, useRef, useState } from "react";

export default function FadeInSection({ as: Tag = "section", className = "", children }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={`fade-in ${visible ? "show" : ""} ${className}`.trim()}>
      {children}
    </Tag>
  );
}
