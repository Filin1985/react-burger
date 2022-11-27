import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './register-page.module.css'

const RegisterPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const inputRef = useRef(null)
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')
  }
  const onChange = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div className={styles.register}>
      <h1 className={styles.register__header}>Регистрация</h1>
      <form className={styles.register__inputs}>
        <Input
          type={'text'}
          placeholder={'Имя'}
          onChange={(e) => setName(e.target.value)}
          value={name}
          name={'name'}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
          extraClass='mt-1'
        />
        <Input
          type={'text'}
          placeholder={'E-mail'}
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          name={'name'}
          error={false}
          ref={inputRef}
          onIconClick={onIconClick}
          errorText={'Ошибка'}
          size={'default'}
          extraClass='ml-1'
        />
        <PasswordInput
          onChange={onChange}
          value={password}
          name={'password'}
          extraClass='mb-2'
        />
        <Button htmlType='button' type='primary' size='medium'>
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
