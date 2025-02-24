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
  {
    image: "/src/assets/HUP.jpeg",
    title: "Hurry Up Tommorow",
    artist: "The Weeknd",
    favoriteSongs: ["Wake Me Up", "Timeless","Niagra Falls"],
    rating: 9.0,
    date: "Feburary W1",
  },
  {
    image: "/src/assets/SIMBI.jpeg",
    title: "Sometimes I Might Be Introvert",
    artist: "Little Simz",
    favoriteSongs: ["Protect My Energy", "Point and Kill", "Miss Understood"],
    rating: 9.0,
    date: "Feburary W2",
  },
  {
    image: "/src/assets/LS.png",
    title: "Liquid Swords",
    artist: "GZA",
    favoriteSongs: ["Living in the World Today", "Shadowboxin'", "Liquid Swords"],
    rating: 9.0,
    date: "Feburary W3",
  },
];

const groupAlbumsByMonth = (albums: Album[]) => {
  return albums.reduce((acc, album) => {
    const month = album.date.split(' ')[0];
    if (!acc[month]) {
      acc[month] = [];
    }
    acc[month].push(album);
    return acc;
  }, {} as Record<string, Album[]>);
};

const App: React.FC = () => {
  const [showAllAlbums, setShowAllAlbums] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);

  const albumsByMonth = groupAlbumsByMonth(albumsData);
  const months = Object.keys(albumsByMonth);

  const toggleView = () => {
    setShowAllAlbums(!showAllAlbums);
    setSelectedMonth(null);
  };

  const handlePrevMonth = () => {
    if (selectedMonth) {
      const currentIndex = months.indexOf(selectedMonth);
      const prevIndex = (currentIndex - 1 + months.length) % months.length;
      setSelectedMonth(months[prevIndex]);
    }
  };

  const handleNextMonth = () => {
    if (selectedMonth) {
      const currentIndex = months.indexOf(selectedMonth);
      const nextIndex = (currentIndex + 1) % months.length;
      setSelectedMonth(months[nextIndex]);
    }
  };

  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 bg-gray-200">
      <h1 className="title">One Album A Week</h1>
      {showAllAlbums ? (
        selectedMonth ? (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {albumsByMonth[selectedMonth].map((album, index) => (
                <div key={index} className="p-4 border rounded shadow text-center">
                  <img className="w-full h-48 object-cover" src={album.image} alt={album.title} />
                  <h2 className="text-xl font-bold mt-2">{album.title}</h2>
                  <p className="text-gray-700 font-medium">{album.artist}</p>
                  <p className="text-gray-700 font-medium">{album.favoriteSongs.join(', ')}</p>
                  <p className="text-gray-700 font-medium">{album.rating}</p>
                  <p className="text-gray-700 font-medium">{album.date}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <button onClick={handlePrevMonth} className="bg-blue-500 text-black px-4 py-2 rounded mr-2 button-lg">
                Prev
              </button>
              <button onClick={() => setSelectedMonth(null)} className="bg-blue-500 text-black px-4 py-2 rounded mr-2 button-lg">
                Back to Months
              </button>
              <button onClick={handleNextMonth} className="bg-blue-500 text-black px-4 py-2 rounded button-lg">
                Next
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {months.map((month, index) => (
                <button key={index} onClick={() => setSelectedMonth(month)} className="bg-blue-500 text-black px-4 py-2 rounded mb-4 button-lg">
                  {month}
                </button>
              ))}
            </div>
            <div className="flex justify-center mt-4">
              <button onClick={toggleView} className="bg-blue-500 text-black px-4 py-2 rounded button-lg">
                Show Latest Album
              </button>
            </div>
          </div>
        )
      ) : (
        <div>
          <div className="p-4 border rounded shadow text-center">
            <img className="w-full h-48 object-cover" src={albumsData[albumsData.length - 1].image} alt={albumsData[albumsData.length - 1].title} />
            <h2 className="text-xl font-bold mt-2">{albumsData[albumsData.length - 1].title}</h2>
            <p className="text-gray-700 font-medium">{albumsData[albumsData.length - 1].artist}</p>
            <p className="text-gray-700 font-medium">{albumsData[albumsData.length - 1].favoriteSongs.join(', ')}</p>
            <p className="text-gray-700 font-medium">{albumsData[albumsData.length - 1].rating}</p>
            <p className="text-gray-700 font-medium">{albumsData[albumsData.length - 1].date}</p>
          </div>
          <div className="flex justify-center mt-4">
            <button onClick={toggleView} className="bg-blue-500 text-black px-4 py-2 rounded button-lg">
              View All Albums
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;