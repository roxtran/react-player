import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faPlay,
  faAngleLeft,
  faAngleRight,
  faPause
} from '@fortawesome/free-solid-svg-icons'

const Player = ({
  audioRef,
  songs,
  setSongs,
  currentSong,
  setCurrentSong,
  isPlaying,
  setIsPlaying,
  songInfo,
  setSongInfo
}) => {
  // Event Handlers
  const handlePlay = () => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play()
    setIsPlaying(!isPlaying)
    // console.log(audioRef.current)
  }

  const formatTime = (time) => {
    return ~~(time / 60) + ':' + ('0' + ~~(time % 60)).slice(-2)
  }

  const handleProgress = (e) => {
    audioRef.current.currentTime = e.target.value
    setSongInfo({ ...songInfo, currentTime: e.target.value })
  }

  const handleSkipTrack = async (direction) => {
    let songIndex = songs.findIndex((song) => song.id === currentSong.id)

    if (direction === 'forward') {
      songIndex = (songIndex + 1) % songs.length
      await setCurrentSong(songs[songIndex])
      handleLibraryUpdate(songs[songIndex])
    }
    if (direction === 'back') {
      songIndex--
      songIndex < 0 && (songIndex = songs.length - 1)
      await setCurrentSong(songs[songIndex])
      handleLibraryUpdate(songs[songIndex])
    }
    isPlaying && audioRef.current.play()
  }
  // Add the styles
  const animTrack = {
    transform: `translateX(${songInfo.animateProgress}%)`
  }

  const handleLibraryUpdate = (currentSong) => {
    const newSongs = songs.map((song) => {
      if (song.id === currentSong.id) {
        return { ...song, active: true }
      } else {
        return { ...song, active: false }
      }
    })
    setSongs(newSongs)
  }

  return (
    <div className='player'>
      <div className='time-control'>
        <p>{formatTime(songInfo.currentTime) || '0:00'}</p>
        <div
          style={{
            background: `linear-gradient(to right, ${currentSong.color[0]}, ${currentSong.color[1]})`
          }}
          className='progress-container'
        >
          <input
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={handleProgress}
            type='range'
          />
          <div style={animTrack} className='animate-progress'></div>
        </div>
        <p>{formatTime(songInfo.duration)}</p>
      </div>
      <div className='play-control'>
        <FontAwesomeIcon
          onClick={() => {
            handleSkipTrack('back')
          }}
          className='skip-back'
          size='2x'
          icon={faAngleLeft}
        />
        <FontAwesomeIcon
          onClick={handlePlay}
          className='play'
          size='2x'
          icon={isPlaying ? faPause : faPlay}
        />
        <FontAwesomeIcon
          onClick={() => handleSkipTrack('forward')}
          className='skip-forward'
          size='2x'
          icon={faAngleRight}
        />
      </div>
    </div>
  )
}

export default Player
