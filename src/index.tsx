import React, { useState } from 'react'
import { IconButtonProps, InputProps, TextField, TextFieldProps } from '@mui/material'

import ToggleVisibility from './components/ToggleVisibility'

type NewInputProps = InputProps & {
  withToggleVisibility?: React.ReactNode
}


type Props = TextFieldProps & {
  iconButtonProps?: IconButtonProps,
  InputProps?: NewInputProps
}

export default function PasswordTextField({ iconButtonProps, InputProps, ...textFieldProps }: Props) {
  const [visible, setVisible] = useState(false) // If users password input is visible or not

  return <TextField
    type={visible ? 'text' : 'password'}
    InputProps={{
      endAdornment: <ToggleVisibility
        visible={visible}
        setVisible={setVisible}
        iconButtonProps={iconButtonProps}
        withToggleVisibility={InputProps?.withToggleVisibility}
      />,
      ...InputProps
    }}
    
    {...textFieldProps}
  />
}
