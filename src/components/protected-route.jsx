import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, Redirect, Route } from 'react-router-dom'
import { checkUserAuth } from '../services/action/auth'
import Loader from './loader/loader'

const ProtectedRoute = ({ onlyUnAuth = false, ...rest }) => {
  const authChecked = useSelector((store) => store.user.authChecked)
  const user = useSelector((store) => store.user.email)
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(checkUserAuth())
  }, [])

  if (!authChecked) {
    return <Loader />
  }

  const { from } = location.state || { from: { pathname: '/' } }

  if (onlyUnAuth && user) {
    return (
      <Redirect
        to={{
          pathname: from.pathname,
        }}
      />
    )
  }

  if (!onlyUnAuth && !user) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: location },
        }}
      />
    )
  }

  return <Route {...rest} />
}

export default ProtectedRoute
