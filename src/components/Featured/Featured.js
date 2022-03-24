import "./Featured.scss";
import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import images from "../../images";

function Featured() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div>
      <h2 className="featured__title">Featured</h2>
      <motion.div
        ref={carousel}
        className="featured__carousel"
        whileTap={{ cursor: "grabbing" }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="featured__carousel-inner"
        >
          {images.map((image) => {
            return (
              <motion.div className="featured__image-container" key={image}>
                <img className="featured__image" src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default Featured;
