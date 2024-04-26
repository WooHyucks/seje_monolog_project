import { type } from '@testing-library/user-event/dist/type'
import React from 'react'

type LogoType = {
  width: string
}

const Logo = ({ width }: LogoType) => {
  return (
    <img className={`w-${width}`} src="/images/Logo.svg" alt="Logo" />
  )
}

export default Logo