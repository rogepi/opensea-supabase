import { Box, Menu } from '@mantine/core'
import { NextLink } from '@mantine/next'
import { ReactNode } from 'react'

export interface MenuItem {
  icon?: ReactNode
  title?: string
  href?: string
  onClick?: () => void
}

interface MenuButtonProps {
  postion?: 'bottom-start' | 'bottom-end' | 'bottom'
  items: MenuItem[]
  diyItem?: ReactNode
  children: ReactNode
}

const MenuButton = (props: MenuButtonProps) => {
  return (
    <>
      <Menu
        trigger="hover"
        position={props.postion ?? 'bottom'}
        offset={19}
        width={220}
        shadow="lg"
        openDelay={100}
        closeDelay={100}
      >
        <Menu.Target>
          <Box>{props.children}</Box>
        </Menu.Target>
        <Menu.Dropdown
          sx={{
            padding: 0,
            border: 'none',
            borderRadius: '0px 0px 15px 15px',
            borderShadow: 'rgb(4 17 29 / 25%) 0px 0px 1px 0px',
            overflow: 'hidden',
          }}
        >
          {props.items.map((item) => {
            return (
              <Menu.Item
                component={NextLink}
                href={item.href ?? ''}
                icon={item.icon}
                p={18}
                sx={(theme) => ({
                  borderBottom:
                    theme.colorScheme === 'dark'
                      ? '1px solid #2b2b2b'
                      : '1px solid #eaeaea',
                  borderRadius: '0px',
                  fontSize: 15,
                  color: '#444',
                  fontWeight: 'bold',
                  '&:hover': { boxShadow: '3px 0px 3px 1px  #ddd ' },
                })}
                key={item.title}
              >
                {item.title}
              </Menu.Item>
            )
          })}
          {props.diyItem}
        </Menu.Dropdown>
      </Menu>
    </>
  )
}

export default MenuButton
