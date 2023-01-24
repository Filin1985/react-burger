import React, { ChangeEvent, useState } from 'react'

type TState = {
  name?: string
  email: string
  password: string
}

export function useForm(inputValues: TState) {
  const [values, setValues] = useState(inputValues)

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target
    setValues({ ...values, [name]: value })
  }
  return { values, handleChange, setValues }
}
