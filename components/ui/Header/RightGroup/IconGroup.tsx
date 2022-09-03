import { Box, Group, Menu, Switch, useMantineColorScheme } from '@mantine/core'
import {
  IconEye,
  IconGridDots,
  IconHeart,
  IconMoon,
  IconSettings,
  IconUser,
  IconUserCircle,
  IconWallet,
} from '@tabler/icons'
import { useState } from 'react'
import MenuButton, { MenuItem } from './MenuButton'
import NavButton from './NavButton'

const accountItems: MenuItem[] = [
  { icon: <IconUser />, title: 'Profile', href: '/profile' },
  { icon: <IconHeart />, title: 'Favorites', href: '/favorites' },
  { icon: <IconEye />, title: 'Watchlist', href: '/watchlist' },
  { icon: <IconGridDots />, title: 'My Collections', href: '/collections' },
  { icon: <IconSettings />, title: 'Settings', href: '/settings' },
]
const DrakModeItem = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const dark = colorScheme === 'dark'
  const [checked, setChecked] = useState(dark)

  const toggle = () => {
    toggleColorScheme()
    setChecked((o) => !o)
  }

  return (
    <Menu.Item
      onClick={() => toggle()}
      icon={<IconMoon />}
      p={18}
      sx={{
        borderBottom: '1px solid #eee',
        borderRadius: '0px',
        fontSize: 15,
        fontWeight: 'bold',
        cursor: 'pointer',
      }}
      key="darkMode"
    >
      <Group>
        Dark Mode
        <Box sx={{}}>
          <Switch checked={checked} onChange={() => toggle()}></Switch>
        </Box>
      </Group>
    </Menu.Item>
  )
}
const IconGroup = () => {
  return (
    <>
      <MenuButton
        postion="bottom-end"
        items={accountItems}
        diyItem={<DrakModeItem />}
      >
        <NavButton title="Account" href="/account">
          <IconUserCircle size={35} />
        </NavButton>
      </MenuButton>

      <NavButton title="Wallet" href="/wallet">
        <IconWallet size={35} />
      </NavButton>
    </>
  )
}
export default IconGroup
