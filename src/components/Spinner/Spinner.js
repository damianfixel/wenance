import React from 'react'
import PropTypes from 'prop-types'
import { StyledSpinner, Loader } from './styled'

const Spinner = ({ loading, size, color, ...rest }) =>
  loading ? (
    <StyledSpinner {...rest}>
      <Loader size={size} color={color}></Loader>
    </StyledSpinner>
  ) : null

Spinner.propTypes = {
  loading: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number
}

Spinner.defaultProps = {
  loading: false,
  color: '#ec0000',
  size: 30
}

export default Spinner
