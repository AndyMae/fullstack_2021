import React, { useState, useImperativeHandle } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Togglable = React.forwardRef((props, ref) => {
  const [visible, setVisible] = useState(false)

  const showWhenVisible = { display: visible ? 'none' : '' }
  const hideWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  useImperativeHandle(ref, () => {
    return { toggleVisibility }
  })

  const StyledButton = styled.button`
  background-color: #6057f0;
  color: white;
  border-radius: 5px;
  `

  return (
    <div>
      <div style={showWhenVisible}>
        <StyledButton onClick={toggleVisibility}>{props.buttonLabel}</StyledButton>
      </div>
      <div style={hideWhenVisible}>
        {props.children}
        <StyledButton onClick={toggleVisibility}>cancel</StyledButton>
      </div>
    </div>
  )
})

Togglable.displayName = 'Togglable'

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

export default Togglable