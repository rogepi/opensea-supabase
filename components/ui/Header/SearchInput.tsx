import { Input, MediaQuery } from '@mantine/core'
import { IconSearch } from '@tabler/icons'

const SearchInput = () => {
  return (
    <MediaQuery smallerThan={600} styles={{ display: 'none' }}>
      <Input
        placeholder="搜索NFT、集合和账户"
        size="md"
        styles={{
          input: {
            borderWidth: 2,
            ':focus': {
              transitionProperty: ['border-color'],
              transitionDuration: '0.5s',
              borderColor: 'gray',
            },
          },
        }}
        sx={{ flexGrow: 'revert' }}
        radius={'md'}
        icon={<IconSearch size={20} />}
      />
    </MediaQuery>
  )
}

export default SearchInput
