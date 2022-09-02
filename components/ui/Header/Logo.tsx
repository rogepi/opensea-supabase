import { Box, Text } from '@mantine/core'
import Image from 'next/image'
import OpenSea from '../../../public/opensea.svg'

const Logo = () => {
  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        <Image src={OpenSea} alt="logo of opensea" height={40} width={40} />
        <Text
          sx={{ display: 'inline-block' }}
          className="text-white"
          ml={'xs'}
          size={23}
          weight={700}
        >
          OpenSea
        </Text>
      </Box>
    </>
  )
}

export default Logo
