export const handleLibraryUpdate = (currentSong, songs, setSongs) => {
  const newSongs = songs.map((song) => {
    if (song.id === currentSong.id) {
      return { ...song, active: true }
    } else {
      return { ...song, active: false }
    }
  })
  setSongs(newSongs)
}
