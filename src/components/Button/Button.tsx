import React from 'react';
import { store, StylingButton } from './ButtonStyle'
import { Props } from './ButtonTypes'

const Button: React.FC<Props> = ({
  onClick, children, themeName, width, margin, marginBottom, disabled, ...props
}) => {

  return (
    <StylingButton
      onClick={onClick}
      theme={store[themeName]}
      width={width}
      margin={margin}
      marginBottom={marginBottom}
      disabled={disabled}
      {...{ ...props }}
    >
      {children}
    </StylingButton>
  )
}
export default Button
