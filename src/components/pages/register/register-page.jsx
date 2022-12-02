import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './register-page.module.css'
import { registerUser } from '../../../services/action/auth'

const RegisterPage = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
  })

  const onIconClick = () => {
    alert('Icon Click Callback')
  }
  const handleChange = (e) => {
    const target = e.target
    const value = target.value
    const name = target.name
    setState({
      ...state,
      [name]: value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(registerUser(state, history))
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
          value={state.name}
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
