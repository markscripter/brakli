import React from 'react'

export const CurrentFeed = ({
  thumbnailURL = false,
  feedURL = false
}) => {
  return (
    <figure className='c-current-feed'>
      { thumbnailURL && <img src={thumbnailURL} /> }
      { feedURL && <video src={feedURL} autoplay /> }
    </figure>
  )
}
