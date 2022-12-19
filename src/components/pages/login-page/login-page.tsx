import React, { SyntheticEvent, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
//@ts-ignore
import styles from '../register/register-page.module.css'
import { loginUser } from '../../../services/action/auth'

const LoginPage = () => {
  const [state, setState] = useState({
    email: '',
    password: '',
  })
  const dispatch = useDispatch()
  const onIconClick = () => {
    alert('Icon Click Callback')
  }
  const handleChange = (e: SyntheticEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement
    const value = target.value
    const name = target.name
    setState({
      ...state,
      [name]: value,
    })
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    //@ts-ignore
    dispatch(loginUser(state))
  }

  return (
    <div className={styles.register}>
      <h1 className={styles.register__header}>Вход</h1>
      <form className={styles.register__inputs} onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='E-mail'
          onChange={handleChange}
          value={state.email}
          name='email'
          error={false}
          onIconClick={onIconClick}
          errorText='Ошибка'
          size='default'
          extraClass='ml-1'
        />
        <PasswordInput
          onChange={handleChange}
          value={state.password}
          name={'password'}
          extraClass='mb-2'
        />
        <Button htmlType='submit' type='primary' size='medium'>
          Войти
        </Button>
      </form>
      <p className={styles.register__login}>
        Вы - новый пользователь? <Link to='/register'>Зарегистрироваться</Link>
      </p>
      <p className={styles.register__login}>
        Забыли пароль? <Link to='/forgot-password'>Восстановить пароль</Link>
      </p>
    </div>
  )
}

export default LoginPage
