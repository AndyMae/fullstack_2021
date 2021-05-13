import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  console.log('in notification comp')
  const notification = useSelector(state => state.notification)
  const tone = useSelector(state => state.tone)

  console.log(notification)
  console.log(tone)

  const visibility = notification !== ''
    ? ''
    : 'none'

  const color = tone === 'pos'
    ? 'green'
    : 'red'

  const style = {
    color: color,
    background: 'lightgrey',
    display: visibility
  }

  return (
    <h2 style={style}>
      {notification}
    </h2>
  )
}

export default Notification