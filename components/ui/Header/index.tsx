import { Header } from '@mantine/core'
import Logo from './Logo'
import RightGroup from './RightGroup'
import SearchInput from './SearchInput'

const Navbar = () => {
  return (
    <>
      <Header
        height={72}
        px="xl"
        sx={{
          maxWidth: '100vw',
          top: 0,
          position: 'sticky',
          zIndex: 120,
          transition: 'top 0.5s ease 0s',
          boxShadow: 'rgb(4 17 29 / 25%) 0px 0px 8px 0px',
        }}
      >
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
