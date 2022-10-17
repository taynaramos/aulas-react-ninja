'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Button = ({ children, handleClick }) => {
  return (
    <button onClick={handleClick}>{children}</button>
  )
}

Button.propTypes = {
  handleClick: PropTypes.func.isRequired,
  childre: PropTypes.string
}

export default Button
