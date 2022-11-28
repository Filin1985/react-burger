import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, Redirect, Route } from 'react-router-dom'
import { authUser } from '../services/action/auth'
import Loader from './loader/loader'

const ProtectedRoute = (props) => {
  const authChecked = useSelector((store) => store.user.authChecked)
  const user = useSelector((store) => store.user.email)
  const location = useLocation()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(authUser())
  }, [])

  if (!authChecked) {
    return <Loader />
  }

  if (!user) {
    return (
      <Redirect
        to={{
          pathname: '/login',
          state: { from: location },
        }}
      />
    )
  }

  return <Route {...props} />
}

export default ProtectedRoute
