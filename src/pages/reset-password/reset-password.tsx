import React, { FormEvent, useState, ChangeEvent } from 'react'
import { useDispatch, useSelector } from '../../services/hooks'
import { Link, useHistory, Redirect } from 'react-router-dom'
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from '../register/register-page.module.css'
import { resetPassword } from '../../services/action/auth'

const ResetPassword = () => {
  const [token, setToken] = useState('')
  const [password, setPassword] = useState('')
  const dispatch = useDispatch()
  const history = useHistory()
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    setPassword(target.value)
  }
  const { visitedPath } = useSelector((store) => store.user)
  const user = useSelector((store) => store.user.email)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(resetPassword(password, token, history))
  }

  if (!visitedPath) {
    return <Redirect to='/login' />
  } else if (user) {
    return <Redirect to='/' />
  }

  return (
    <div className={styles.register}>
      <h1 className={styles.register__header}>Вход</h1>
      <form className={styles.register__inputs} onSubmit={handleSubmit}>
        <PasswordInput
          onChange={onChange}
          value={password}
          name='password'
          extraClass='mb-2'
        />
        <Input
          type='text'
          placeholder='Введите код из письма'
          onChange={(e) => setToken(e.target.value)}
          value={token}
          name='token'
          error={false}
          errorText='Ошибка'
          size='default'
          extraClass='ml-1'
        />

        <Button htmlType='submit' type='primary' size='medium'>
          Сохранить
        </Button>
      </form>
      <p className={styles.register__login}>
        Вспомнили пароль? <Link to='/login'>Войти</Link>
      </p>
    </div>
  )
}

export default ResetPassword
