import React, { Dispatch, SetStateAction } from 'react'
import { IconButton, IconButtonProps } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

type Props = {
  visible: boolean,
  setVisible: Dispatch<SetStateAction<boolean>>,
  iconButtonProps?: IconButtonProps
}

export default function ToggleVisibility({ visible, setVisible, iconButtonProps }: Props) {
  const handleToggleVisibilityClick = () => setVisible(!visible)

  const handleToggleVisibilityMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault()

  return (
    <IconButton
      aria-label="toggle password visibility"
      onClick={handleToggleVisibilityClick}
      onMouseDown={handleToggleVisibilityMouseDown}
      edge="end"

      {...iconButtonProps}
    >
      {visible ? <VisibilityOff /> : <Visibility />}
    </IconButton>
  )
}
