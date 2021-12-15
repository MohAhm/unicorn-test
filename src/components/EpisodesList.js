import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { getEpisodes } from '../api/episodes'
import Episode from './Episode'

const EpisodesListStyle = styled.div`
  max-width: 768px;
  margin: 0 auto 2rem;
`

export default function EpisodesList() {
  const [episodes, setEpisodes] = useState([])

  useEffect(() => {
    getEpisodes()
      .then(data => setEpisodes(data))
  }, [])

  return (
    <EpisodesListStyle>
      {episodes.map(episode => <Episode key={episode.id} episode={episode}/>)}
    </EpisodesListStyle>
  )
}
