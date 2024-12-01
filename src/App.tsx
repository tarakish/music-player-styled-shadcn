import { useState, useRef } from "react";

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
    musicUrl: "/burning_heart.mp3",
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
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const currentSong = songs[currentSongIndex];

  const handlePrevious = () => {
    setCurrentSongIndex(
      (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
    );
    setIsPlaying(false);
  };

  const handleNext = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
    setIsPlaying(false);
  };

  const togglePlayPause = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <div>
        <img
          src={currentSong.coverUrl}
          alt="Cover"
          style={{ width: "300px", height: "300px" }}
        />
      </div>
      <div>
        <h2>{currentSong.title}</h2>
        <p>{currentSong.artist}</p>
      </div>
      <div>
        <button onClick={handlePrevious}>戻る</button>
        <button onClick={togglePlayPause}>
          {isPlaying ? "一時停止" : "再生"}
        </button>
        <button onClick={handleNext}>次へ</button>
      </div>
      <audio ref={audioRef} src={currentSong.musicUrl} onEnded={handleNext} />
    </div>
  );
}

export default App;