import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Section from "./components/Section/Section";
import { fetchTopAlbum, fetchNewAlbum } from "./components/ApiCalls/api";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [topAlbum, setTopAlbum] = useState([]);
  const [newAlbum, setNewAlbum] = useState([]);

  const topAlbums = async () => {
    try {
      const res = await fetchTopAlbum();
      console.log(res);
      setTopAlbum(res);
    } catch (error) {
      console.log("error while top fetching");
      return null;
    }
  };

  const NewAlbums = async () => {
    try {
      const res = await fetchNewAlbum();
      setNewAlbum(res);
    } catch (error) {
      console.log("error while new fetching", error);
      return null;
    }
  };

  useEffect(() => {
    topAlbums();
    NewAlbums();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Section text="Top Album" album={topAlbum} />
      <Section text="New Album" album={newAlbum} />

      {/* <Carousel /> */}
    </>
  );
}

export default App;
