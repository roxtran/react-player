import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Nav = ({ showLibrary, setShowLibrary }) => {
  return (
    <nav>
      <h1>React Player</h1>
      <button onClick={() => setShowLibrary(!showLibrary)}>
        Library <FontAwesomeIcon icon={faMusic} />
      </button>
    </nav>
  )
}

export default Nav
