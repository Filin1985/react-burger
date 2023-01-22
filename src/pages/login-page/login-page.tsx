import React, { SyntheticEvent, useState } from 'react'
import { useDispatch } from '../../services/hooks'
import { Link } from 'react-router-dom'
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from '../register/register-page.module.css'
import { loginUser } from '../../services/action/auth'
import { useForm } from '../../hooks/useForm'

const LoginPage = () => {
  const { values, handleChange, setValues } = useForm({
    email: '',
    password: '',
  })
  const dispatch = useDispatch()
  const onIconClick = () => {
    alert('Icon Click Callback')
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch(loginUser(values))
  }

  return (
    <div className={styles.register}>
      <h1 className={styles.register__header}>Вход</h1>
      <form className={styles.register__inputs} onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='E-mail'
          onChange={handleChange}
          value={values.email}
          name='email'
          error={false}
          onIconClick={onIconClick}
          errorText='Ошибка'
          size='default'
          extraClass='ml-1'
        />
        <PasswordInput
          onChange={handleChange}
          value={values.password}
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
