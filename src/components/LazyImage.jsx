import React, { useEffect, useRef, useState } from "react";

const LazyImage = ({ imgSrc, imgAlt, movingImgSrc }) => {
  const [inView, setInView] = useState(false);
  const imgRef = useRef();

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setInView(true);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(callback);

    if (imgRef?.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return inView ? (
    <img
      ref={imgRef}
      src={movingImgSrc ? movingImgSrc : imgSrc}
      alt={imgAlt}
      loading="lazy"
    />
  ) : (
    <img ref={imgRef} src={imgSrc} alt={imgAlt} loading="lazy" />
  );
};

export default LazyImage;
