import './App.css'
import { AlbumCard } from './Components/AlbumCard'
import { Button, Typography } from "@material-tailwind/react";
import { ButtonDefault } from './Components/ButtonDefault';
import { useState } from 'react';

interface Album {
  image: string;
  title: string;
  artist: string;
  favoriteSongs: string[];
  rating: number;
  date: string;
}

const albumsData: Album[] = [
  {
    image: "/src/assets/ABNH.png",
    title: "Alligator Bites Never Heal",
    artist: "Doechii",
    favoriteSongs: ["BLOOM", "DENIAL IS A RIVER", "WAIT"],
    rating: 7.5,
    date: "January W1",
  },
  {
    image: "/src/assets/Currents.png",
    title: "Currents",
    artist: "Tame Impala",
    favoriteSongs: ["Let It Happen", "Past Life", "Cause I'm a Man"],
    rating: 8.0,
    date: "January W2",
  },
  {
    image: "/src/assets/CRG.jpg",
    title: "Can't Rush Greatness",
    artist: "Central Cee",
    favoriteSongs: ["Gata", "CRG", "Now We're Strangers"],
    rating: 9.0,
    date: "January W3",
  },
];

function App() {
  const [currentAlbumIndex, setCurrentAlbumIndex] = useState(0);

  const handlePrev = () => {
    setCurrentAlbumIndex((prevIndex) => (prevIndex === 0 ? albumsData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentAlbumIndex((prevIndex) => (prevIndex === albumsData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div id="root">
      <h1>One Album A Week</h1>
      <div className="card">
        <AlbumCard
          {...albumsData[currentAlbumIndex]}
        />
      </div>
      <Typography variant="h6" color="gray" className="uppercase font-bold" placeholder="" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}}>
        {albumsData[currentAlbumIndex].date}
      </Typography>
      <div className="">
        <ButtonDefault sign="PREV" onClick={handlePrev}/>
        <ButtonDefault sign="NEXT" onClick={handleNext}/>
      </div>
    </div>
  )
}

export default App