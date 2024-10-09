import React, { useEffect } from 'react';

const AutoZoom = ({ children }) => {
  useEffect(() => {
    const applyZoom = () => {
      document.body.style.zoom = '75%';
      document.body.style.transform = 'scale(0.75)';
      document.body.style.transformOrigin = '0 0';
    };

    applyZoom();
    window.addEventListener('resize', applyZoom);

    return () => {
      window.removeEventListener('resize', applyZoom);
    };
  }, []);

  return <>{children}</>;
};

export default AutoZoom;