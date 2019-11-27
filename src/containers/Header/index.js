import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Header from '../../components/Layout/Header'
import { removeToken } from '../../services/auth'
import { logout } from '../../store/ducks/auth'

const HeaderContainer = ({ isLogged, logout }) => {
  if (!isLogged) return null

  const attemptLogout = () => {
    logout()
    removeToken()
  }

  return <Header onClick={() => attemptLogout()} />
}

const mapDispatchToProps = dispatch => bindActionCreators({ logout }, dispatch)
const mapStateToProps = ({ auth: { isLogged } }) => ({ isLogged })

HeaderContainer.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HeaderContainer)
