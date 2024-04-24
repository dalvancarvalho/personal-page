/* Paragraph/index.jsx */

import { forwardRef } from 'react'

import Translation from '../Translation'

import paragraphVariants from './constants/paragraphVariants'

// prettier-ignore
const Paragraph = forwardRef(function Paragraph(props, ref) {
  // Paragraph with a set of 'variable' and 'fixed' font-size variants

  const {
    children,
    className = '',     // any other class needed goes here
    i18nKey,
    variant = 'medium', // defaults to 'medium' variant if this prop is not passed
  } = props

  const style = paragraphVariants[variant]

  return (
    <p className={`${style} ${className}`} ref={ref}>
      {i18nKey ? <Translation>{i18nKey}</Translation> : children}
    </p>
  )
})

export default Paragraph
