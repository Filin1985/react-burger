import React, { SyntheticEvent, useState } from 'react'

type TState = {
  name?: string
  email: string
  password: string
}

export function useForm(inputValues: TState) {
  const [values, setValues] = useState(inputValues)

  const handleChange = (event: SyntheticEvent<HTMLInputElement>) => {
    const { value, name } = event.target as HTMLInputElement
    setValues({ ...values, [name]: value })
  }
  return { values, handleChange, setValues }
}
