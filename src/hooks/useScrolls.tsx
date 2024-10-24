import { useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const useScrolls = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "2 1"],
  });
  const scalValues = useTransform(scrollYProgress, [0, 1], [0.7, 1]);
  const style = {
    scale: scalValues,
  };
  return { style, ref };
};

export default useScrolls;
