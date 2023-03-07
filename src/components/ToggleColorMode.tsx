import { MoonIcon, SunIcon } from '@chakra-ui/icons'
import { Button, useColorMode} from '@chakra-ui/react'

export function ToggleColorMode() {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
      <Button onClick={toggleColorMode} borderTopRadius="none">
        {colorMode === 'light' ? <MoonIcon boxSize={6} /> : <SunIcon boxSize={6} />}
      </Button>
  )
}