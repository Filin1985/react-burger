import React, { useEffect, FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, Redirect, Route } from 'react-router-dom'
import { checkUserAuth } from '../services/action/auth'
import Loader from './loader/loader'

interface IAuth {
  onlyUnAuth?: boolean
  children: JSX.Element
  path: string
  exact: boolean
}

const ProtectedRoute: FC<IAuth> = ({ onlyUnAuth = false, ...rest }) => {
  const authChecked = useSelector((store: any) => store.user.authChecked)
  console.log(authChecked)
  const user = useSelector((store: any) => store.user.email)
  console.log(user)
  const location = useLocation()
  console.log(location)

  if (!authChecked) {
    return <Loader />
  }

  const { from }: any = location.state || { from: { pathname: '/' } }

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
