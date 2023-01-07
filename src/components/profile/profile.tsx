import React, {
  useEffect,
  useState,
  useRef,
  SyntheticEvent,
  ChangeEvent,
} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styles from './profile.module.css'

import {
  Button,
  Input,
} from '@ya.praktikum/react-developer-burger-ui-components'
import { updateUser } from '../../services/action/auth'
import { TICons } from '@ya.praktikum/react-developer-burger-ui-components/dist/ui/icons'
import ProfileNav from './profile-nav/profile-nav'

interface IForm {
  name: string
  email: string
  password: string
  nameEdit: boolean
  emailEdit: boolean
  passwordEdit: boolean
}

const Profile = () => {
  const activeUserName = useSelector((store: any) => store.user.name)
  const activeUserEmail = useSelector((store: any) => store.user.email)
  const activeUserPassword = useSelector((store: any) => store.user.password)
  const dispatch = useDispatch()
  const [form, setForm] = useState<IForm>({
    name: '',
    email: '',
    password: '',
    nameEdit: false,
    emailEdit: false,
    passwordEdit: false,
  })
  const [buttonDisabled, setButtonDisabled] = useState<boolean>(true)
  const nameRef = useRef<HTMLInputElement | null>(null)
  const emailRef = useRef<HTMLInputElement | null>(null)
  const passwordRef = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    setForm({
      ...form,
      name: activeUserName,
      email: activeUserEmail,
      password: activeUserPassword,
    })
  }, [activeUserName, activeUserEmail, activeUserPassword])

  const nameIcon: keyof TICons = form.nameEdit ? 'CloseIcon' : 'EditIcon'
  const emailIcon: keyof TICons = form.emailEdit ? 'CloseIcon' : 'EditIcon'
  const passwordIcon: keyof TICons = form.passwordEdit
    ? 'CloseIcon'
    : 'EditIcon'

  const onNameIconClick = () => {
    setForm({
      ...form,
      nameEdit: form.nameEdit ? false : true,
    })
    if (nameRef && nameRef.current) {
      nameRef.current.disabled = !nameRef.current.disabled
    }
  }

  const onEmailIconClick = () => {
    setForm({
      ...form,
      emailEdit: form.emailEdit ? false : true,
    })
    if (emailRef && emailRef.current) {
      emailRef.current.disabled = !emailRef.current.disabled
    }
  }

  const onPasswordIconClick = () => {
    setForm({
      ...form,
      passwordEdit: form.passwordEdit ? false : true,
    })
    if (passwordRef && passwordRef.current) {
      passwordRef.current.disabled = !passwordRef.current.disabled
    }
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    if (form[e.target.name as keyof IForm] !== e.target.value) {
      setButtonDisabled(false)
    }
    const value = e.target.value
    const name = e.target.name
    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault()
    setButtonDisabled(true)
    //@ts-ignore
    dispatch(updateUser(state))
  }

  const handleClearChanges = () => {
    setForm({
      ...form,
      name: activeUserName,
      email: activeUserEmail,
      password: activeUserPassword,
      nameEdit: false,
      emailEdit: false,
      passwordEdit: false,
    })
    setButtonDisabled(true)
  }

  return (
    <section className={styles.profile}>
      <ProfileNav />
      <form className={styles.profile__data} onSubmit={handleSubmit}>
        <Input
          type='text'
          placeholder='Имя'
          onChange={handleChange}
          value={form.name}
          name='name'
          error={false}
          ref={nameRef}
          onIconClick={onNameIconClick}
          errorText='Ошибка'
          size='default'
          icon={nameIcon}
          disabled={!form.nameEdit}
        />
        <Input
          type='text'
          placeholder='E-mail'
          onChange={handleChange}
          value={form.email}
          name='email'
          ref={emailRef}
          error={false}
          onIconClick={onEmailIconClick}
          errorText='Ошибка'
          size='default'
          icon={emailIcon}
          disabled={!form.emailEdit}
        />
        <Input
          type='password'
          placeholder='пароль'
          onChange={handleChange}
          value={form.password}
          icon={passwordIcon}
          onIconClick={onPasswordIconClick}
          name='password'
          ref={passwordRef}
          disabled={!form.passwordEdit}
        />
        <div className={styles.profile__change}>
          <Button
            className={styles.profile__cancel}
            htmlType='button'
            type='secondary'
            size='medium'
            onClick={handleClearChanges}
            disabled={buttonDisabled}
          >
            {/* <Link to='/profile'>Отмена</Link> */}
            Отмена
          </Button>
          <Button
            htmlType='submit'
            type='primary'
            size='medium'
            disabled={buttonDisabled}
          >
            Сохранить
          </Button>
        </div>
      </form>
    </section>
  )
}

export default Profile
