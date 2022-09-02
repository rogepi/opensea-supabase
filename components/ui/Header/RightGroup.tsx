import { ActionIcon, Box, Group, MediaQuery, Text } from '@mantine/core'
import {
  IconMenu2,
  IconSearch,
  IconUserCircle,
  IconWallet,
  IconX,
} from '@tabler/icons'
import { useState, ReactNode } from 'react'

interface IconButtonProps {
  title: string
  onClick?: () => void
  children: ReactNode
}
const IconButton = (props: IconButtonProps) => {
  return (
    <ActionIcon
      title={props.title}
      onClick={props.onClick}
      variant="transparent"
      sx={{
        height: '35px',
        width: '35px',
        color: '#04111DBF',
        ':hover': { color: 'black' },
      }}
    >
      {props.children}
    </ActionIcon>
  )
}

const RightGroup = () => {
  const [opened, setOpened] = useState(false)
  const title = opened ? 'Close menu' : 'Open menu'

  return (
    <>
      <Group spacing={35}>
        <MediaQuery largerThan={600} styles={{ display: 'none' }}>
          <Box>
            <IconButton title="Open search bar">
              <IconSearch size={35} />
            </IconButton>
          </Box>
        </MediaQuery>
        <MediaQuery smallerThan={1200} styles={{ display: 'none' }}>
          <Group spacing={35}>
            <Text color={'#04111DBF'} weight={'bolder'}>
              Explore
            </Text>
            <Text color={'#04111DBF'} weight={'bolder'}>
              Stats
            </Text>
            <Text color={'#04111DBF'} weight={'bolder'}>
              Resources
            </Text>
            <Text color={'#04111DBF'} weight={'bolder'}>
              Create
            </Text>
          </Group>
        </MediaQuery>
        <MediaQuery smallerThan={1025} styles={{ display: 'none' }}>
          <Group spacing={35}>
            <IconButton title="Account">
              <IconUserCircle size={35} />
            </IconButton>
            <IconButton title="Wallet">
              <IconWallet size={35} />
            </IconButton>
          </Group>
        </MediaQuery>
        <MediaQuery largerThan={1200} styles={{ display: 'none' }}>
          <Box>
            <IconButton title={title} onClick={() => setOpened((o) => !o)}>
              {opened ? <IconX size={35} /> : <IconMenu2 size={35} />}
            </IconButton>
          </Box>
        </MediaQuery>
      </Group>
    </>
  )
}

export default RightGroup
