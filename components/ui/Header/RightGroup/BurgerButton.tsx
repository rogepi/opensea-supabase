import { IconMenu2, IconX } from '@tabler/icons'
import { useState } from 'react'
import NavButton from './NavButton'

const BurgerButton = () => {
  const [opened, setOpened] = useState(false)
  const title = opened ? 'Close menu' : 'Open menu'

  return (
    <>
      <NavButton title={title} onClick={() => setOpened((o) => !o)}>
        {opened ? <IconX size={35} /> : <IconMenu2 size={35} />}
      </NavButton>
    </>
  )
}

export default BurgerButton
