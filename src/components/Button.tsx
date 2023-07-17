import React, { ReactNode } from 'react'
import { useActionData } from 'react-router-dom'


interface Props {
  children: string, 
  color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark',
  onClick: () => void

}

function Button({ children, onClick, color='primary' }: Props) {
  
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClick} >{children} </button>
  )
}

export default Button