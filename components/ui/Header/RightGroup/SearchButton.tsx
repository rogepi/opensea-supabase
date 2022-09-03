import { IconSearch } from '@tabler/icons'
import NavButton from './NavButton'

const SearchButton = () => {
  return (
    <>
      <NavButton title="Open search bar">
        <IconSearch size={35} />
      </NavButton>
    </>
  )
}

export default SearchButton
