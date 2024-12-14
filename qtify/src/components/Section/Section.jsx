import { useEffect, useState } from "react";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";
import Button from "../Button/Button";

import AlbumCard from "../AlbumCard/AlbumCard";

function Section({ text, toggle = true, album }) {
  const [toggleCarousel, setToggleCarousel] = useState(true);

  const carousel1 = 1;
  const carousel2 = 2;

  const handleToggle = () => {
    setToggleCarousel(!toggleCarousel);
  };

  return (
    <>
      <div className={styles.SectionWrapper}>
        <div className={styles.upperText}>
          <div className={styles.heading}>{text}</div>
          <h4 onClick={handleToggle} className={styles.h4}>
            {toggle ? toggleCarousel ? "Show All" : "Collapse" : <></>}
          </h4>
        </div>

        {toggleCarousel ? (
          <div className={styles.showAllWrapper}>
            {album.map((item) => (
              //show card here
              <AlbumCard
                img={item.image}
                follower={item.follows}
                name={item.title}
                key={item.id}
              />
            ))}
          </div>
        ) : (
          <Carousel
            slides={album}
            uniqueId1={`${text.replace(/\s+/g, "-")}-next`}
            uniqueId2={`${text.replace(/\s+/g, "-")}-prev`}
          />
        )}
      </div>
    </>
  );
}

export default Section;
