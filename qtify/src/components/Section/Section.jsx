import axios from "axios";
import { useEffect, useState } from "react";
import AlbumCard from "../AlbumCard/AlbumCard";
import Button from "../Button/Button";
import styles from "./Section.module.css";
import Carousel from "../Carousel/Carousel";

function Section() {
  const [data, setData] = useState([]);
  const [data2, setData2] = useState([]);

  const apiCall1 = async () => {
    const url = "https://qtify-backend-labs.crio.do/albums/top";
    try {
      const response = await axios.get(url);
      console.log("data::", response.data);
      if (response) {
        setData(response.data);
      } else {
        console.log("error while fethching albums");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const apiCall2 = async () => {
    const url = "https://qtify-backend-labs.crio.do/albums/new";
    try {
      const response = await axios.get(url);
      console.log(response.data);
      if (response) {
        console.log("NewAlbum::", response.data);
        setData2(response.data);
      } else {
        console.log("error while fethching albums");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    apiCall1();
    apiCall2();
  }, []);

  return (
    <div className={styles.SectionWrapper}>
      <Carousel slides={data} text={"Top Albums"} />
      <Carousel slides={data2} text={"New Albums"} />
    </div>
  );
}

export default Section;
