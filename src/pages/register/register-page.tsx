import React, { SyntheticEvent, useState } from 'react'
import { useDispatch } from '../../services/hooks'
import { Link, useHistory } from 'react-router-dom'
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './register-page.module.css'
import { registerUser } from '../../services/action/auth'
import { useForm } from '../../hooks/useForm'

const RegisterPage = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const { values, handleChange, setValues } = useForm({
    name: '',
    email: '',
    password: '',
  })

  const onIconClick = () => {
    alert('Icon Click Callback')
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    dispatch(registerUser(values, history))
  }

  return (
    <div className={styles.register}>
      <h1 className={styles.register__header}>Регистрация</h1>
      <form
        className={styles.register__inputs}
        onSubmit={(e) => handleSubmit(e)}
      >
        <Input
          type='text'
          placeholder='Имя'
          onChange={handleChange}
          value={values.name ? values.name : ''}
          name='name'
          error={false}
          onIconClick={onIconClick}
          errorText='Ошибка'
          size='default'
          extraClass='mt-1'
        />
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
          name='password'
          extraClass='mb-2'
        />
        <Button htmlType='submit' type='primary' size='medium'>
          Зарегистрироваться
        </Button>
      </form>
      <p className={styles.register__login}>
        Уже зарегистрировались? <Link to='/login'>Войти</Link>
      </p>
    </div>
  )
}

export default RegisterPage
