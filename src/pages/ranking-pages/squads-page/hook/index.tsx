import { useEffect, useState } from "react";

export const useImageExists = (src?: string) => {
  const [exists, setExists] = useState(false);

  useEffect(() => {
    if (!src) return () => setExists(false);

    let cancelled = false;
    const img = new Image();
    img.onload = () => !cancelled && setExists(true);
    img.onerror = () => !cancelled && setExists(false);
    img.src = src;

    return () => cancelled = true;
  }, [src]);

  return exists;
};