import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { LoginForm } from '../../components/Forms'
import { authLogin, setToken } from '../../services/auth'
import { login } from '../../store/ducks/auth'
import history from '../../utils/History'

const LoginFormContainer = (props, { isLogged }) => {
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState(false)

  if (isLogged) return history.push('/home')

  const onSubmit = async data => {
    setLoading(true)
    try {
      const resp = await authLogin(data)
      props.login()
      history.push('/home')
      setLoading(false)
      setToken(resp.data.token)
    } catch (error) {
      setLoading(false)
      setError(true)
    }
  }

  return <LoginForm onSubmit={onSubmit} error={error} disabled={loading} />
}

const mapDispatchToProps = dispatch => bindActionCreators({ login }, dispatch)
const mapStateToProps = ({ auth: { isLogged } }) => ({ isLogged })

LoginFormContainer.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  login: PropTypes.func.isRequired
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginFormContainer)
