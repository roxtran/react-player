import React from 'react'
import { handleLibraryUpdate } from '../util'

const LibrarySong = ({
  song,
  songs,
  setSongs,
  setCurrentSong,
  isPlaying,
  audioRef
}) => {
  // Event Listeners
  const handleSongSelect = async () => {
    await setCurrentSong(song)
    isPlaying && audioRef.current.play()
    handleLibraryUpdate(song, songs, setSongs)
  }

  return (
    <div
      className={`library-song ${song.active ? 'selected' : ''}`}
      onClick={handleSongSelect}
    >
      <img src={song.cover} alt={song.name} />
      <div className='song-description'>
        <h3>{song.name}</h3>
        <h4>{song.artist}</h4>
      </div>
    </div>
  )
}

export default LibrarySong
