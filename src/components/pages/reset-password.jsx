import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './register-page.module.css'

const ResetPassword = () => {
  const [code, setCode] = useState('')
  const [password, setPassword] = useState('')
  const onChange = (e) => {
    setPassword(e.target.value)
  }

  return (
    <div className={styles.register}>
      <h1 className={styles.register__header}>Вход</h1>
      <form className={styles.register__inputs}>
        <PasswordInput
          onChange={onChange}
          value={password}
          name={'password'}
          extraClass='mb-2'
        />
        <Input
          type='text'
          placeholder='Введите код из письма'
          onChange={(e) => setCode(e.target.value)}
          value={code}
          name='name'
          error={false}
          errorText='Ошибка'
          size='default'
          extraClass='ml-1'
        />

        <Button htmlType='button' type='primary' size='medium'>
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
