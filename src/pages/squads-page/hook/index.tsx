import { useEffect, useState } from "react";

export const useImageExists = (src?: string) => {
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (!src) return () => setOk(false);

    const img = new Image();
    img.onload = () => setOk(true);
    img.onerror = () => setOk(false);
    img.src = src;
  }, [src]);

  return ok;
};