import React from 'react';
import "./Button.css";


const STYLES = [
  'btn--primary',
  'btn--outline',
] 

const SIZES = [
  'btn--medium',
  'btn--large',
]

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const ckeckButtonStyle = STYLES.includes(buttonStyle) ? buttonStyle : STYLES[0]
  const CheckButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0]

  return (
    <button className={`btn ${ckeckButtonStyle} ${CheckButtonSize}`} onClick={onClick} type={type}>
      {children}
    </button>
  )
}