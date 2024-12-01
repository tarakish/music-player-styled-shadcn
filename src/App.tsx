import { useState } from "react";

type Song = {
  id: number;
  title: string;
  artist: string;
  coverUrl: string;
  musicUrl: string;
};

const songs: Song[] = [
  {
    id: 1,
    title: "シャイニングスター",
    artist: "詩歩",
    coverUrl: "/shining_star.jpg",
    musicUrl: "/shining_star.mp3",
  },
  {
    id: 2,
    title: "Burning Heart",
    artist: "KEI",
    coverUrl: "/burning_heart.webp",
    musicUrl: "/burning-heart.mp3",
  },
  {
    id: 3,
    title: "12345",
    artist: "Mary",
    coverUrl: "/12345.jpg",
    musicUrl: "/12345.mp3",
  },
  {
    id: 4,
    title: "ハルジオン",
    artist: "KEI",
    coverUrl: "/halzion.jpg",
    musicUrl: "/halzion.mp3",
  },
  {
    id: 5,
    title: "Bipolar Disorder Outside ver.",
    artist: "森田交一",
    coverUrl: "/outside.png",
    musicUrl: "/outside.mp3",
  },
]

function App() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const currentSong = songs[currentSongIndex];

  const handlePrevious = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
    );
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  return (
    <div>
      <div>
        <img src={currentSong.coverUrl} alt="Cover" />
      </div>
      <div>
        <h2>{currentSong.title}</h2>
        <p>{currentSong.artist}</p>
      </div>
      <div>
        <button onClick={handlePrevious}>戻る</button>
        <button onClick={handleNext}>次へ</button>
      </div>
    </div>
  );
}

export default App;