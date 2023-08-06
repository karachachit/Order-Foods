import React from 'react'
import {StyledButton} from './Button'
import { styled } from 'styled-components'

export const IcanButton = ({Icon, onClick,type = 'button', disabled}) => {
  return (
    <StyledButton
    onClick={onClick}
    type={type}
    variant='outlined'
    disabled={disabled}
    >
{Icon && <Icon />}
    </StyledButton >
  )
}

const StyledButton =styled('Button')`
    border-radius:6px;
    padding:0.5rem 0.875rem;
    &:hover svg,
    &:active path{
        fill: white;
    }

`

