import { Box } from '@mantine/core'
import Link from 'next/link'
import { ReactNode } from 'react'
import { HOVERCOLOR, ICONCOLOR } from './NavButton'

interface BlankLinkProps {
  title: string
  href: string
  children: ReactNode
}

const BlankLink = (props: BlankLinkProps) => {
  return (
    <Link href={props.href}>
      <a href={props.href} target="_blank" rel="noreferrer">
        <Box
          sx={{
            color: ICONCOLOR,
            ':hover': { color: HOVERCOLOR },
          }}
        >
          {props.children}
        </Box>
      </a>
    </Link>
  )
}

export default BlankLink
