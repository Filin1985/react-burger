import React, { FC } from 'react'
import { useLocation, Redirect, Route } from 'react-router-dom'
import { useSelector } from '../services/hooks'
import Loader from './loader/loader'
import { Location } from 'history'

interface IAuth {
  onlyUnAuth?: boolean
  children: JSX.Element
  path: string
  exact?: boolean
}

const ProtectedRoute: FC<IAuth> = ({
  onlyUnAuth = false,
  children,
  ...rest
}) => {
  const authChecked = useSelector((store) => store.user.authChecked)
  const user = useSelector((store) => store.user.email)
  const location = useLocation<{ from: Location }>()

  if (!authChecked) {
    return <Loader />
  }

  const { from } = location.state || { from: { pathname: '/' } }

  if (onlyUnAuth && user) {
    return (
      <Route {...rest}>
        <Redirect to={from} />
      </Route>
    )
  }

  if (!onlyUnAuth && !user) {
    return (
      <Route {...rest}>
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location },
          }}
        />
      </Route>
    )
  }

  return <Route {...rest}>{children}</Route>
}

export default ProtectedRoute
