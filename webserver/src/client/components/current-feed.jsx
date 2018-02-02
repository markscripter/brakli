import React from 'react'

export const CurrentFeed = ({
  text = '',
  thumbnailURL = false,
  feedURL = false
}) => {
  return (
    <figure className='c-current-feed'>
      <figcaption>{text}</figcaption>
      { thumbnailURL && <img src={thumbnailURL} /> }
      { feedURL && <video src={feedURL} autoplay /> }
    </figure>
  )
}
