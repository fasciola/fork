/** Subtle, accessibility-safe section reveal (framer-motion, reduced-motion aware). */
import { motion, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  y?: number
  className?: string
  once?: boolean
}

export function Reveal({ children, delay = 0, y = 28, className, once = true }: RevealProps) {
  const reduce = useReducedMotion()
  if (reduce) return <div className={className}>{children}</div>
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  copy?: string
  align?: 'left' | 'center'
  dark?: boolean
  as?: 'h1' | 'h2' | 'h3'
}

export function SectionHeading({ eyebrow, title, copy, align = 'left', dark, as = 'h2' }: SectionHeadingProps) {
  const Tag = as
  return (
    <Reveal className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}>
      {eyebrow && <p className={dark ? 'eyebrow' : 'eyebrow-navy'}>{eyebrow}</p>}
      <Tag
        className={`mt-4 text-balance font-display text-3xl font-semibold leading-[1.12] sm:text-4xl lg:text-[2.75rem] ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </Tag>
      {copy && (
        <p className={`mt-5 text-lg leading-relaxed ${dark ? 'text-white/70' : 'text-muted-foreground'}`}>{copy}</p>
      )}
    </Reveal>
  )
}
