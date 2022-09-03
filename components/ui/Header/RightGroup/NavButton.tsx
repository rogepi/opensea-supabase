import { ActionIcon, Anchor } from '@mantine/core'
import Link from 'next/link'
import { ReactNode } from 'react'

export interface NavButtonProps {
  title: string
  href?: string
  onClick?: () => void
  children: ReactNode
}

export const ICONCOLOR = '#707a83'
export const HOVERCOLOR = '#04111DBF'

const NavButton = (props: NavButtonProps) => {
  return (
    <Link href={props.href ?? ''} passHref>
      <Anchor component="a" underline={false}>
        <ActionIcon
          title={props.title}
          onClick={props.onClick}
          variant="transparent"
          sx={{
            height: '35px',
            width: '35px',
            color: ICONCOLOR,
            ':hover': { color: HOVERCOLOR },
          }}
        >
          {props.children}
        </ActionIcon>
      </Anchor>
    </Link>
  )
}

export default NavButton
