import { Box, Drawer } from '@mantine/core'
import { IconMenu2, IconX } from '@tabler/icons'
import { useState } from 'react'
import NavButton from './NavButton'

const BurgerButton = () => {
  const [opened, setOpened] = useState(false)
  const title = opened ? 'Close menu' : 'Open menu'

  return (
    <>
      <Drawer
        size={'400px'}
        lockScroll={false}
        zIndex={99}
        position="right"
        opened={opened}
        onClose={() => setOpened((o) => !o)}
        withCloseButton={false}
      >
        <Box sx={{ paddingTop: '72px' }}>
          <h1>111</h1>
        </Box>
      </Drawer>
      <NavButton title={title} onClick={() => setOpened((o) => !o)}>
        {opened ? <IconX size={35} /> : <IconMenu2 size={35} />}
      </NavButton>
    </>
  )
}

export default BurgerButton
