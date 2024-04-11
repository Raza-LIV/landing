import type React from 'react'
import type { LinkProps, } from 'next/link'

export type LinkBase = Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof LinkProps> & LinkProps
