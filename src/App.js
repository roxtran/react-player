import { useState, useRef } from 'react'
import Player from './components/Player'
import Song from './components/Song'
import Library from './components/Library'
import data from './data'
import './styles/app.scss'
import Nav from './components/Nav'

function App() {
  // Ref
  const audioRef = useRef(null)
  // State
  const [songs, setSongs] = useState(data)
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animateProgress: 0
  })
  const [showLibrary, setShowLibrary] = useState(false)

  // Event Listeners
  const handleTimeUpdate = (e) => {
    const currentTime = e.target.currentTime
    const duration = e.target.duration
    // Calculate percentage
    const roundedCurrent = Math.round(currentTime)
    const roundedDuration = Math.round(duration)
    const percentage = Math.round((roundedCurrent / roundedDuration) * 100)

    // console.log(percentage)
    setSongInfo({
      ...songInfo,
      currentTime,
      duration,
      animateProgress: percentage
    })
  }

  const handleSongEnd = async () => {
    let songIndex = songs.findIndex((song) => song.id === currentSong.id)
    await setCurrentSong(songs[(songIndex + 1) % songs.length])
    isPlaying && audioRef.current.play()
  }

  return (
    <div className={`App ${showLibrary ? 'library-active' : ''}`}>
      <Nav showLibrary={showLibrary} setShowLibrary={setShowLibrary} />
      <Song currentSong={currentSong} isPlaying={isPlaying} />
      <Player
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
        currentSong={currentSong}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <Library
        showLibrary={showLibrary}
        audioRef={audioRef}
        songs={songs}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        isPlaying={isPlaying}
      />
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleTimeUpdate}
        onEnded={handleSongEnd}
      ></audio>
    </div>
  )
}

export default App
