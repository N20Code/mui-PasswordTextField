import React, { Dispatch, SetStateAction } from 'react'
import { IconButton, IconButtonProps } from '@mui/material'
import { Visibility, VisibilityOff } from '@mui/icons-material'

type Props = {
  visible: boolean,
  setVisible: Dispatch<SetStateAction<boolean>>,
  iconButtonProps?: IconButtonProps,
  withToggleVisibility?: React.ReactNode
}

export default function ToggleVisibility({ visible, setVisible, iconButtonProps, withToggleVisibility }: Props) {
  const handleToggleVisibilityClick = () => setVisible(!visible)

  const handleToggleVisibilityMouseDown = (event: React.MouseEvent<HTMLButtonElement>) => event.preventDefault()

  return (
    <>
      {withToggleVisibility}
      
      <IconButton
        aria-label="toggle password visibility"
        onClick={handleToggleVisibilityClick}
        onMouseDown={handleToggleVisibilityMouseDown}
        edge="end"

        {...iconButtonProps}
      >
        {visible ? <VisibilityOff /> : <Visibility />}
      </IconButton>
    </>
  )
}
