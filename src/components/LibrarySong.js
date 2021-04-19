import React from 'react'

const LibrarySong = ({
  id,
  song,
  songs,
  setSongs,
  setCurrentSong,
  isPlaying,
  audioRef
}) => {
  // Event Listeners
  const handleSongSelect = async (id) => {
    await setCurrentSong(song)

    // Add active state
    const newSongs = songs.map((song) => {
      if (song.id === id) {
        return { ...song, active: true }
      } else {
        return { ...song, active: false }
      }
    })
    setSongs(newSongs)

    isPlaying && audioRef.current.play()
  }

  return (
    <div
      className={`library-song ${song.active ? 'selected' : ''}`}
      onClick={() => handleSongSelect(id)}
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
