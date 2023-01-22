import React, { useState, FormEvent } from 'react'
import { useDispatch } from '../../services/hooks'
import { Link, useHistory, useLocation } from 'react-router-dom'
import {
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from '../register/register-page.module.css'
import { forgotPassword } from '../../services/action/auth'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')

  const dispatch = useDispatch()
  const history = useHistory()
  const location = useLocation()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(forgotPassword(email, location.pathname, history))
  }

  return (
    <div className={styles.register}>
      <h1 className={styles.register__header}>Восстановление пароля</h1>
      <form className={styles.register__inputs} onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='E-mail'
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name='email'
          error={false}
          errorText='Ошибка'
          size='default'
          extraClass='ml-1'
        />
        <Button htmlType='submit' type='primary' size='medium'>
          Восстановить
        </Button>
      </form>
      <p className={styles.register__login}>
        Вспомнили пароль? <Link to='/login'>Войти</Link>
      </p>
    </div>
  )
}

export default ForgotPassword
