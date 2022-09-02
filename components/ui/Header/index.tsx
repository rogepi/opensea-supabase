import { Header } from '@mantine/core'
import Logo from './Logo'
import RightGroup from './RightGroup'
import SearchInput from './SearchInput'

const Navbar = () => {
  return (
    <>
      <Header height={72} p="xs">
        <div
          style={{
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between ',
          }}
        >
          <Logo />
          <div style={{ flex: 2, maxWidth: 725, margin: '0 30px' }}>
            <SearchInput />
          </div>
          <RightGroup />
        </div>
      </Header>
    </>
  )
}

export default Navbar
