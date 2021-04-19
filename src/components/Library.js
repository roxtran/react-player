import React from 'react'
import LibrarySong from './LibrarySong'

const Library = ({
  showLibrary,
  audioRef,
  songs,
  setSongs,
  setCurrentSong,
  isPlaying
}) => {
  return (
    <div className={`library ${showLibrary ? 'active-library' : ''}`}>
      <h2>Library</h2>
      <div className='library-songs'>
        {songs.map((song) => (
          <LibrarySong
            key={song.id}
            song={song}
            id={song.id}
            songs={songs}
            setSongs={setSongs}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying}
          />
        ))}
      </div>
    </div>
  )
}

export default Library
