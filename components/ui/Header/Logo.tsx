import { Anchor, Box, Text, useMantineTheme } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import OpenSea from '../../../public/opensea.svg'

const Logo = () => {
  const dark = useMantineTheme().colorScheme === 'dark'
  return (
    <>
      <Link href="/" passHref>
        <Anchor component="a" underline={false}>
          <Box
            sx={{ display: 'flex', alignItems: 'center', cursor: 'pointer' }}
          >
            <Image src={OpenSea} alt="logo of opensea" height={40} width={40} />
            <Text
              color={'black'}
              sx={[
                { display: 'inline-block' },
                dark ? { color: 'white' } : { color: 'black' },
              ]}
              className="text-white"
              ml={'xs'}
              size={23}
              weight={700}
            >
              OpenSea
            </Text>
          </Box>
        </Anchor>
      </Link>
    </>
  )
}

export default Logo
