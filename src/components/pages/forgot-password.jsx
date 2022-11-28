import React, { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import {
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components'
import styles from './register-page.module.css'

const ForgotPassword = () => {
  const [email, setEmail] = useState('')

  const inputRef = useRef(null)
  const onIconClick = () => {
    setTimeout(() => inputRef.current.focus(), 0)
    alert('Icon Click Callback')
  }
  const onChange = (e) => {
    setEmail(e.target.value)
  }

  return (
    <div className={styles.register}>
      <h1 className={styles.register__header}>Восстановление пароля</h1>
      <form className={styles.register__inputs}>
        <Input
          type='text'
          placeholder='E-mail'
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
        <Button htmlType='button' type='primary' size='medium'>
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
