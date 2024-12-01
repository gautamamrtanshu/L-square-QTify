import axios from "axios";
import { useEffect, useState } from "react";
import AlbumCard from "../AlbumCard/AlbumCard";
import Button from "../Button/Button";
import styles from "./Section.module.css";

function Section() {
  const [data, setData] = useState([]);

  const apiCall = async () => {
    const url = "https://qtify-backend-labs.crio.do/albums/top";
    try {
      const response = await axios.get(url);
      console.log(response.data);
      if (response) {
        setData(response.data);
      } else {
        console.log("error while fethching albums");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  return (
    <div className={styles.SectionWrapper}>
      <div className={styles.heading}>
        <div>Top Albums</div>
        <Button text="Collapse" />
      </div>
      <div className={styles.cards}>
        {data.map((item) => {
          return (
            <AlbumCard
              img={item && item.image}
              follower={item && item.follows}
              name={item && item.title}
              key={item.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Section;
