import React from 'react'
import styled from 'styled-components'

const video = "https://cdn.videvo.net/videvo_files/video/free/201308/large_watermarked/hd0992_preview.mp4"

const EpisodeStyle = styled.div`
  color: #696969;
  padding: 30px 0;
  border-bottom: 1px solid #eee;

  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
  }

  h2 {
    color: #111;
    font-size: 24px;
    line-height: 1.1;
    margin: 0;
  }
`

const VideoStyle = styled.div`
  height: 340px;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
`

export default function Episode({ episode }) {
  return (
    <EpisodeStyle>
      {/* <video
        src={video}
      /> */}

      <VideoStyle>Not found 🎥</VideoStyle>

      <div className='header'>
        <h2>{episode.title}</h2>
        <span>{episode.originalAirDate}</span>
      </div>
      <p>{episode.desc}</p>
    </EpisodeStyle>
  )
}
