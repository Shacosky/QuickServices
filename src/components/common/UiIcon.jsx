import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-native-vector-icons/FontAwesome'

export  const UiIcon = ({ name, size = 4, color = '#fff' }) => {
  return <Icon name={name} size={size} color={color} />
}

UiIcon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.number,
  color: PropTypes.string,
}

UiIcon.defaultProps = {
  size: 30,
  color: '#fff',
}
