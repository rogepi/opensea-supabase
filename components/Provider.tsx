import { ReactNode, useState } from 'react'
import {
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core'

interface Props {
  children: ReactNode
}

const Provider = ({ children }: Props) => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light')
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          colorScheme,
          activeStyles: { transform: 'scale(1)', opacity: 0.8 },
        }}
      >
        {children}
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

export default Provider
