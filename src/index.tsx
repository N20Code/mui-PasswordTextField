import React, { useState } from 'react'
import { IconButtonProps, TextField, TextFieldProps } from '@mui/material'

import ToggleVisibility from './components/ToggleVisibility'

type Props = TextFieldProps & {
  iconButtonProps?: IconButtonProps
}

export default function PasswordTextField({ iconButtonProps, ...textFieldProps }: Props) {
  const [visible, setVisible] = useState(false) // If users password input is visible or not

  return <TextField
    type={visible ? 'text' : 'password'}
    InputProps={{
      endAdornment: <ToggleVisibility
        visible={visible}
        setVisible={setVisible}
        iconButtonProps={iconButtonProps}
      />
    }}
    
    {...textFieldProps}
  />
}
