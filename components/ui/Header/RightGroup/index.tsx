import { Box, Group, MediaQuery, Space } from '@mantine/core'
import BurgerButton from './BurgerButton'
import IconGroup from './IconGroup'
import SearchButton from './SearchButton'
import TextGroup from './TextGroup'

const RightGroup = () => {
  return (
    <nav>
      <Group spacing={35}>
        <MediaQuery largerThan={600} styles={{ display: 'none' }}>
          <Box>
            <SearchButton />
          </Box>
        </MediaQuery>

        <MediaQuery smallerThan={1200} styles={{ display: 'none' }}>
          <Group>
            <TextGroup />
            <Space w="md" />
          </Group>
        </MediaQuery>

        <MediaQuery smallerThan={1025} styles={{ display: 'none' }}>
          <Group spacing={35}>
            <IconGroup />
          </Group>
        </MediaQuery>

        <MediaQuery largerThan={1200} styles={{ display: 'none' }}>
          <Box>
            <BurgerButton />
          </Box>
        </MediaQuery>
      </Group>
    </nav>
  )
}

export default RightGroup
